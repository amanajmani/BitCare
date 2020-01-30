import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator, StatusBar, ToastAndroid } from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import NoTransactionCard from '../components/NoTransactionsCard';
import TransactionCard from '../components/TransactionCard';
import BitcoinCard from '../components/BitcoinCard';
import * as Utils from '../utils/utils';

import '../../shim';

import styles from '../assets/screens/Address';
import ActionCreators from '../actions';

function Address(props) {
  const [testnetAddress, setTestnetAddress] = useState('');
  const [testnetKeypair, setTestnetKeypair] = useState();
  const [onClick, setOnClick] = useState(false);
  const destinationAddress = '2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE';

  const { btc, data, broadcast } = props;
  const isEmpty = btc && btc.transactions.length === 0;

  const build = () => {
    return new Promise((resolve, reject) => {
      const bitcoin = require('bitcoinjs-lib');
      const txb = new bitcoin.TransactionBuilder();
      const outputNumber = btc.transactions[0].n;
      const txid = btc.transactions[0].txid;
      const amount = btc.transactions[0].value_int;
      const outputAmount = amount - 1500;
      txb.network = bitcoin.networks.testnet;
      txb.addInput(txid, outputNumber);
      txb.addOutput(destinationAddress, outputAmount);
      txb.sign(0, testnetKeypair);
      resolve(txb.build().toHex());
    });
  };

  async function generateAddress() {
    const { keypair, address } = Utils.generateNewAddress();
    setTestnetAddress(address);
    setTestnetKeypair(keypair);
    setOnClick(true);
    return await props.getNewBitcoinData(address);
  }

  const sendBitcoin = () => {
    return build()
      .then(txnHex => props.broadcastTransaction(txnHex))
      .then(() => {
        ToastAndroid.showWithGravity(
          'Bitcoins sent successfully',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      })
      .then(() => refresh())
      .catch(err => console.log('ERROR', err));
  };

  const refresh = () => {
    return props.getNewBitcoinData(testnetAddress);
  };

  return (
    <View style={styles.background}>
      {!onClick ? (
        <View style={styles.buttonContainer}>
          <IconButton
            icon={() => (
              <Icon name="logo-bitcoin" size={200} style={styles.icon} />
            )}
            size={200}
            onPress={() => generateAddress()}
          />
          <Text style={styles.iconText}>G E N E R A T E</Text>
        </View>
      ) : (
        <React.Fragment>
          <StatusBar backgroundColor="#1a1b25" />
          <Button
            labelStyle={styles.secondaryButtonText}
            color="#1a1b25"
            icon={() => <Icon name="md-refresh" size={20} color="#553b00" />}
            onPress={() => setOnClick(false)}>
            GENERATE A NEW ONE?
          </Button>

          {data.fetching && <ActivityIndicator />}

          {data.fetched && (
            <React.Fragment>
              <BitcoinCard
                address={btc.balance.address}
                balance={btc.balance.total.balance}
              />

              <Text style={styles.header}>UNSPENT TRANSACTIONS</Text>
              <Button
                labelStyle={styles.secondaryButtonText}
                color="#1a1b25"
                icon={() => (
                  <Icon name="md-refresh" size={20} color="#553b00" />
                )}
                onPress={() => refresh()}>
                R E F R E S H
              </Button>
              {isEmpty && <NoTransactionCard />}
              <View>
                {btc.transactions &&
                  btc.transactions.map(item => {
                    return (
                      <TransactionCard
                        id={item.id}
                        blockHeight={item.confirmations}
                        value={item.value}
                      />
                    );
                  })}
              </View>

              <View style={styles.footer}>
                {broadcast.fetching && <ActivityIndicator />}
                <Button
                  mode="contained"
                  labelStyle={
                    isEmpty
                      ? styles.disabledButtonText
                      : styles.primaryButtonText
                  }
                  style={isEmpty ? styles.disabledButton : styles.primaryButton}
                  disabled={isEmpty}
                  onPress={() => sendBitcoin()}>
                  SEND BTC BACK
                </Button>
              </View>

              {isEmpty && (
                <Text style={styles.footerText}>
                  Please make a transaction first
                </Text>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    data: state.newAddress,
    btc: state.newAddress.data,
    broadcast: state.broadcastTransaction,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Address);

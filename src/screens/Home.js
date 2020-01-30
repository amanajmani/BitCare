import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator, ScrollView, StatusBar } from 'react-native';
import { Text, Searchbar, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../assets/screens/Home';
import BitcoinCard from '../components/BitcoinCard';
import TransactionCard from '../components/TransactionCard';
import NoTransactionCard from '../components/NoTransactionsCard';

import ActionCreators from '../actions';

import '../../shim';

const bitcoin = require('bitcoinjs-lib');

function Home(props) {
  const [address, setAddress] = useState('');
  const [hasError, setHasError] = useState(false);

  const { data, fetching, fetched } = props;

  const isAddressValid = () => {
    try {
      bitcoin.address.toOutputScript(address, bitcoin.networks.testnet);
      setHasError(false);
      return true;
    } catch (error) {
      console.log(error);
      setHasError(true);
      return false;
    }
  };

  const isEmpty = data && data.transactions.length === 0;
  return (
    <ScrollView style={styles.background}>
      <StatusBar backgroundColor="#1a1b25" />
      <Searchbar
        placeholder="btc address"
        onChangeText={input => setAddress(input)}
        value={address}
        icon={() => (
          <Icon size={25} name={'md-search'} style={styles.searchBarIcon} />
        )}
        onSubmitEditing={() => {
          if (isAddressValid()) {
            props.getBitcoinData(address);
          }
        }}
        onIconPress={() => {
          if (isAddressValid()) {
            props.getBitcoinData(address);
          }
        }}
        style={styles.searchBar}
        clearIcon={() => (
          <Icon style={styles.searchBarIcon} size={25} name={'md-close'} />
        )}
        inputStyle={styles.searchBarInput}
        theme={{ colors: { placeholder: '#42465f' } }}
      />
      {!fetched && (
        <Text style={styles.welcomeText}>DROP IN YOUR BITCOIN ADDRESS</Text>
      )}

      <HelperText type="error" visible={hasError} style={styles.helperText}>
        Bitcoin address is invalid!
      </HelperText>

      {fetching && <ActivityIndicator />}

      {fetched && !hasError && (
        <React.Fragment>
          <BitcoinCard
            address={data.balance.address}
            balance={data.balance.confirmed.balance}
          />

          <Text style={styles.header}> UNSPENT TRANSACTIONS</Text>

          {isEmpty && <NoTransactionCard />}

          <View style={styles.cardsContainer}>
            {data.transactions &&
              data.transactions.map(item => {
                return (
                  <TransactionCard
                    id={item.id}
                    blockHeight={item.confirmations}
                    value={item.value}
                  />
                );
              })}
          </View>
        </React.Fragment>
      )}
    </ScrollView>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    data: state.existingAddress.data,
    fetching: state.existingAddress.fetching,
    fetched: state.existingAddress.fetched,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

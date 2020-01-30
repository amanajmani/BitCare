import Axios from 'axios';

export function getBitcoinData(address) {
  let balanceUrl = `https://testnet-api.smartbit.com.au/v1/blockchain/address/${address}?tx=0`;
  let transactionsUrl = `https://testnet-api.smartbit.com.au/v1/blockchain/address/${address}/unspent`;
  const requestBalance = Axios.get(balanceUrl);
  const requestTransactions = Axios.get(transactionsUrl);

  return Axios.all([requestBalance, requestTransactions])
    .then(
      Axios.spread((...responses) => {
        const balance = responses[0].data.address;
        const transactions = responses[1].data.unspent;
        return { balance, transactions };
      }),
    )
    .catch(() => {
      return { bitcoinDataError: 'Try Again' };
    });
}

export function broadcastTransaction(txnHex) {
  const url = 'https://testnet-api.smartbit.com.au/v1/blockchain/pushtx';
  const params = { hex: txnHex };
  return Axios.post(url, params)
    .then(response => response.data)
    .catch(err => console.log(err));
}
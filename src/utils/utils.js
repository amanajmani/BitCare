export function generateNewAddress() {
  const bitcoin = require('bitcoinjs-lib');
  const network = bitcoin.networks.testnet;
  const keypair = bitcoin.ECPair.makeRandom({ network });
  const pubkey = keypair.publicKey;
  const addressObject = bitcoin.payments.p2pkh({ pubkey, network });
  const address = addressObject.address;
  return { keypair, address };
}

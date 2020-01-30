import * as Axios from '../apiCalls/axios';

export function getBitcoinData(address) {
  return dispatch => {
    dispatch({
      type: 'FETCH_ADDRESS_DETAILS',
    });

    return Axios.getBitcoinData(address).then(
      data => {
        dispatch({
          type: 'FETCHED_ADDRESS_DETAILS',
          payload: {
            data,
          },
        });
      },
      error => {
        console.log(error);
      },
    );
  };
}

export function getNewBitcoinData(address) {
  return dispatch => {
    dispatch({
      type: 'FETCH_NEW_ADDRESS_DETAILS',
    });

    return Axios.getBitcoinData(address).then(
      data => {
        dispatch({
          type: 'FETCHED_NEW_ADDRESS_DETAILS',
          payload: {
            data,
          },
        });
      },
      error => {
        console.log(error);
      },
    );
  };
}

export function broadcastTransaction(txnHex) {
  return dispatch => {
    dispatch({
      type: 'SEND_TRANSACTION',
    });

    return Axios.broadcastTransaction(txnHex).then(
      data => {
        dispatch({
          type: 'SENT_TRANSACTION',
          payload: {
            data,
          },
        });
      },
      error => {
        console.log(error);
      },
    );
  };
}

export function existingAddressReducer(
  currentState = { fetching: false, fetched: false },
  action,
) {
  switch (action.type) {
    case 'FETCH_ADDRESS_DETAILS':
      return {
        ...currentState,
        fetching: true,
        fetched: false,
      };
    case 'FETCHED_ADDRESS_DETAILS':
      return {
        ...currentState,
        data: action.payload.data,
        fetching: false,
        fetched: true,
      };
    default:
      return currentState;
  }
}

export function newAddressReducer(
  currentState = { fetching: false, fetched: false },
  action,
) {
  switch (action.type) {
    case 'FETCH_NEW_ADDRESS_DETAILS':
      return {
        ...currentState,
        fetching: true,
        fetched: false,
      };
    case 'FETCHED_NEW_ADDRESS_DETAILS':
      return {
        ...currentState,
        data: action.payload.data,
        fetching: false,
        fetched: true,
      };
    default:
      return currentState;
  }
}

export function broadcastTransactionReducer(
  currentState = { fetching: false, fetched: false },
  action,
) {
  switch (action.type) {
    case 'SEND_TRANSACTION':
      return {
        ...currentState,
        fetching: true,
        fetched: true,
      };
    case 'SENT_TRANSACTION':
      return {
        ...currentState,
        data: action.payload.data,
        fetching: false,
        fetched: true,
      };
    default:
      return currentState;
  }
}

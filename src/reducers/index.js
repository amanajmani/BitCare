import { combineReducers } from 'redux';

import {
  existingAddressReducer,
  newAddressReducer,
  broadcastTransactionReducer,
} from './dataReducer.js';

export default combineReducers({
  existingAddress: existingAddressReducer,
  newAddress: newAddressReducer,
  broadcastTransaction: broadcastTransactionReducer,
});

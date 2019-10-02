import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  showRequest,
  showSuccess,
  showFailure
} from '../actions/show';

const series = handleActions({
  [showRequest.toString()]: () => [],
  [showSuccess.toString()]: (_state, action) => action.payload
}, []);

const isLoading = handleActions({
  [showRequest.toString()]: () => true,
  [showSuccess.toString()]: () => false
}, false);

const error = handleActions({
  [showFailure.toString()]: (_state, action) => action.payload
}, null);

export default combineReducers({
  series,
  isLoading,
  error
});
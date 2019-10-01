import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  showRequest,
  showSuccess,
  showFailure
} from '../actions/show';

const series = handleActions({
  [showRequest]: () => [],
  [showSuccess]: (_state, action) => action.payload
}, []);

const isLoading = handleActions({
  [showRequest]: () => true,
  [showSuccess]: () => false
}, false);

const error = handleActions({
  [showFailure]: (_state, action) => action.payload
}, null);

export default combineReducers(
  series,
  isLoading,
  error
);
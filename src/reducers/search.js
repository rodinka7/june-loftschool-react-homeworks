import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/search';

const series =  handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false
  },
  false
);

const error = handleActions({
  [searchFailure]: (_state, action) => action.payload
}, null);

export default combineReducers(
  series,
  isLoading,
  error
);
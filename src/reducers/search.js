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
    [searchSuccess]: (_state, action) => {
      console.log(action);
      
      return [...action.payload];
    }
  },
  []
);

const isLoading = handleActions(
  {
    [searchRequest.toString()]: () => true,
    [searchSuccess.toString()]: () => false
  },
  false
);

const error = handleActions({
  [searchFailure.toString()]: (_state, action) => action.payload
}, null);

export default combineReducers({
  series,
  isLoading,
  error
});
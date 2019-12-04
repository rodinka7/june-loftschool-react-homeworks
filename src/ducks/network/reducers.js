import { combineReducers } from 'redux';
import { networkError, clearNetworkErrors } from './actions'; 
import { handleActions } from 'redux-actions';

const error = handleActions({
    [networkError]: (_state, action) => action.payload,
    [clearNetworkErrors]: () => null
}, null);

const message = handleActions({
    [networkError]: (_state, action) => action.payload.response.message,
    [clearNetworkErrors]: () => null
}, null);

export default combineReducers({
    error,
    message
});
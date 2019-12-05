import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { userRequest, userSuccess, userFailure } from './actions';

export const data = handleActions({
    [userRequest]: () => null,
    [userSuccess]: (_state, action) => action.payload.data,
    [userFailure]: () => null 
}, null);

export const error = handleActions({
    [userRequest]: () => null,
    [userSuccess]: () => null,
    [userFailure]: (_state, action) => action.payload
}, null);

const isFetched = handleActions({
    [userSuccess]: () => true,
    [userFailure]: () => false
}, false);

export const isFetching = handleActions({
    [userRequest]: () => true,
    [userSuccess]: () => false,
    [userFailure]: () => false
}, false);

export default combineReducers({
    data,
    error,
    isFetched,
    isFetching
});
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { userRequest, userSuccess, userFailure } from './actions';

const data = handleActions({
    [userRequest]: () => [],
    [userSuccess]: (_state, action) => action.payload,
    [userFailure]: () => [] 
}, []);

const error = handleActions({
    [userRequest]: () => null,
    [userSuccess]: () => null,
    [userFailure]: (_state, action) => action.payload
}, null);

const isFetched = handleActions({
    [userSuccess]: () => true,
    [userFailure]: () => false
}, false);

const isFetching = handleActions({
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
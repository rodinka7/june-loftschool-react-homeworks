import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    followersRequest,
    followersSuccess,
    followersFailure
} from './actions';

export const data = handleActions({
    [followersRequest]: () => [],
    [followersSuccess]: (_state, action) => action.payload.data,
    [followersFailure]: () => []
}, []);

export const error = handleActions({
    [followersRequest]: state => null,
    [followersSuccess]: state => null,
    [followersFailure]: (_state, action) => action.payload
}, null);

export const isFetching = handleActions({
    [followersRequest]: () => true,
    [followersSuccess]: () => false,
    [followersFailure]: () => false
}, false);

const isFetched = handleActions({
    [followersRequest]: () => false,
    [followersSuccess]: () => true,
    [followersFailure]: () => false
}, false);

export default combineReducers({
    data, 
    error,
    isFetched,
    isFetching
})
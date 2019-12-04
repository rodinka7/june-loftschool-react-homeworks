import { combineReducers } from 'redux';
import { auth } from './auth';
import { network } from './network';
import { users } from './users';
import { followers } from './followers';

export default combineReducers({
    auth,
    network,
    users,
    followers
});
import { userRequest, userSuccess, userFailure } from './actions';
import users from './reducers'; 
import { getData, getError, getIsFetched, getIsFetching } from './selectors';
console.log({users: users});

export { users, userRequest, userSuccess, userFailure, getData, getError, getIsFetched, getIsFetching };
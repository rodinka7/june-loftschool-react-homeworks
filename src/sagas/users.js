import { takeLatest, put, call } from 'redux-saga/effects';
import { getTokenOwner, getUserInfo } from '../api';
import { userRequest, userSuccess, userFailure} from '../ducks/users';
import requestFlow from './request';

function* getUser(action, a) {       
    try {
        const response = action.payload 
            ? call(requestFlow, getUserInfo, action.payload)
            : call(requestFlow, getTokenOwner);
        yield put(userSuccess(response));
    } catch (error) {
        yield put(userFailure(error));
    }
}

export default function* fetchUserWatch(){
    yield takeLatest(userRequest, getUser);
}
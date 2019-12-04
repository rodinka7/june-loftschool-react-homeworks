import { call, put, select, take } from 'redux-saga/effects';
import { setAccessToken, clearAccessToken } from '../api';
import { authorize, logout, getIsAuthorized } from '../ducks/auth';
import {
    setTokenToStorage,
    getTokenFromStorage,
    removeTokenFromStorage
} from '../localstorage';

export default function* authFlow(action) {
    while (true) {
        const isAuthorized = yield select(getIsAuthorized);
        let storageToken = yield call(getTokenFromStorage);
        
        if (!isAuthorized && storageToken)
            yield put(authorize());    
        else {
            const action = yield take(authorize);
            storageToken = action.payload;
        }
        
        yield call(setAccessToken, storageToken);
        yield call(setTokenToStorage, storageToken);

        yield take(logout);

        yield call(clearAccessToken);
        yield call(removeTokenFromStorage);
    }
}
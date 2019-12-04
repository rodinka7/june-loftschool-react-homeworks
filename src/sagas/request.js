import { call, put, select } from 'redux-saga/effects';
import {
    networkError, 
    isNetworkErrorPresent,
    clearNetworkErrors
} from '../ducks/network';

import { logout } from '../ducks/auth';

export default function*(fn, args) {
    try {
        const response = yield call(fn, args);
        if (yield select(isNetworkErrorPresent))
            yield put(clearNetworkErrors());
        return response;
    } catch (error) {
        yield put(networkError(error));

        if (error.response.status === 401)
            put(logout());
        
        throw error;
    }
}
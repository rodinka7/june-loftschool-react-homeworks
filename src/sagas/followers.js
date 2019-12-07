
import { takeLatest, call, put } from 'redux-saga/effects'
import {
    followersRequest,
    followersSuccess,
    followersFailure
} from '../ducks/followers';
import requestFlow from './request';
import { getUserFollowings } from '../api';

function* getFollowers(action) {
    try {
        const response = yield call(requestFlow, getUserFollowings, action.payload);
        
        yield put(followersSuccess(response));
    } catch(error) {
        yield put(followersFailure(error));
    }
}

export default function* fetchFollowersWatcher() {
    yield takeLatest(followersRequest, getFollowers);
}
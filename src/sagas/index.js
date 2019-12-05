import { fork } from 'redux-saga/effects';
import authFlow from './auth';
import getUser from './users';
import getFollowers from './followers';

export default function*() {
    yield fork(authFlow);
    yield fork(getUser);
    yield fork(getFollowers);
}
import { call, put, select } from 'redux-saga/effects';
import requetsFlow from './request';
import { logout } from '../ducks/auth';
import {
    networkError, 
    isNetworkErrorPresent,
    clearNetworkErrors
} from '../ducks/network';

const data = {id: 1};
const func = jest.fn();

describe('Request saga testing without errors', () => {
    const iterator = requetsFlow(func, data);

    it('Call passed function', () => {
        expect(iterator.next().value).toEqual(call(func, data));
    });

    it('check if network errors are present', () => {
        expect(iterator.next().value).toEqual(select(isNetworkErrorPresent));
    })

    it('dispatches clearNetworkErrors action', () => {
        expect(iterator.next(true).value.type).toEqual(put(clearNetworkErrors()).type);
    });

    it('end of the testing', () => {
        expect(iterator.next().done).toEqual(true);
    })
});

describe('Request saga testing with 401 error', () => {
    const iterator = requetsFlow(func, data);
    const error = new Error('error');
    error.response = {
        status: 401
    };

    iterator.next();

    it('dispatch network error action', () => {
        expect(iterator.throw(error).value.payload).toEqual(put(networkError(error)).payload);
    });

    it('dispatch logout', () => {
        expect(iterator.next().value).toEqual(put(logout()));
    })
    
})
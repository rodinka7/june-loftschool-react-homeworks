import { userRequest, userSuccess, userFailure } from './actions';
import { data, isFetching, error } from './reducers';

describe('users reducer.js', () => {
    it('userRequest changes isFetching', () => {
        expect(isFetching(null, userRequest())).toBeTruthy();
        expect(isFetching(null, userSuccess())).toBeFalsy();
        expect(isFetching(null, userFailure())).toBeFalsy();
    });

    it('data expects to be equal null with userSuccess action', () => {
        expect(data(null, userRequest())).toBeFalsy();
    });

    it('data should contain fields', () => {
        expect(data(null, userSuccess({data: {login: 'rodinka7'}}))).toHaveProperty('login', 'rodinka7');
    });

    it('expects error to be equal null with userRequest and userSuccess actions', () => {
        expect(error(null, userRequest())).toBeNull();
        expect(error(null, userSuccess())).toBeNull();
    })

    it('expects error to have dat with fetchUserFailure action', () => {
        expect(error(null, userFailure('There 401  error has occured'))).toEqual('There 401  error has occured');
    })
})
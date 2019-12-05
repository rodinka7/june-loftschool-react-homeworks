import {
    followersRequest,
    followersSuccess,
    followersFailure
} from './actions';
import { data, error, isFetching} from './reducers';

describe('Followers reducer testing', () => {
    it('Actions changes the isFetching flag', () => {
        expect(isFetching(false, followersRequest())).toBeTruthy();
        expect(isFetching(false, followersSuccess())).toBeFalsy();
        expect(isFetching(false, followersFailure())).toBeFalsy();
    });

    it('Followers field becomes empty on followersRequest action', () => {
        expect(data([], followersRequest())).toHaveLength(0);
    });

    it('Followers field recieves data on followersSuccess', () => {
        expect(data([], followersSuccess({data: [
            {
                id: 0,
                login: 'rodinka7'
            },
            {
                id: 1,
                login: 'test login'
            }
        ]}))).toHaveLength(2);
    });

    it('error becomes empty on followersSuccess and followersRequest actions', () => {
        expect(error(null, followersSuccess())).toBeNull();
        expect(error(null, followersRequest())).toBeNull();
    });

    it('errors recives data on followersFailure actions', () => {
        expect(error(null, followersFailure('error'))).toEqual('error');
    })
})

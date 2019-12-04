import { createActions } from 'redux-actions';

export const { 
    followersRequest,
    followersSuccess,
    followersFailure
} = createActions(
    'FOLLOWERS_REQUEST',
    'FOLLOWERS_SUCCESS',
    'FOLLOWERS_FAILURE'
);
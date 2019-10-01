import { createAction } from 'redux-actions';

export const fetchSearchRequest = createAction('FETCH_SEARCH_REQUEST');
export const fetchSearchSuccess = createAction('FETCH_SEARCH_SUCCESS');
export const fetchSearchError = createAction('FETCH_SEARCH_ERROR');
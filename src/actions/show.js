import { createAction } from 'redux-actions';

export const fetchShowRequest = createAction('FETCH_SHOW_REQUEST');
export const fetchShowSuccess = createAction('FETCH_SHOW_SUCCESS');
export const fetchShowError = createAction('FETCH_SHOW_ERROR');
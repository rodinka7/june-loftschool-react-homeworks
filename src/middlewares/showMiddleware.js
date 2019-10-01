import {
    fetchShowSuccess,
    fetchShowRequest,
    fetchShowError
} from '../actions/show';
import { show } from '../api';

export default store => next => action => {
    if (action.type === fetchShowRequest.toString())
        show(action.payload)
            .then(response => store.dispatch(fetchShowSuccess(response.json())))
            .catch(error => store.dispatch(fetchShowError(error)));
}
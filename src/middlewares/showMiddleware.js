import {
    showSuccess,
    showRequest,
    showFailure
} from '../actions/show';
import { show } from '../api';

export default store => next => action => {    
    if (action.type === showRequest.toString())
        show(action.payload)
            .then(response => store.dispatch(showSuccess(response.json())))
            .catch(error => store.dispatch(showFailure(error)));
}
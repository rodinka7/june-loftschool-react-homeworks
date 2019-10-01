import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions/search';

import { search } from '../api'

export default store => next => action => {
    if (action.type === searchRequest.toString())
        search(action.payload)
            .then(response => store.dispatch(searchSuccess(response)))
            // .then(shows => shows.map(show => show.show))
            .catch(error => store.dispatch(searchFailure(error)));
}
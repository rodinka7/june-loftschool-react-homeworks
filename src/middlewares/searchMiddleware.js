import {
    fetchSearchRequest,
    fetchSearchSuccess,
    fetchSearchError
} from '../actions/search';
import { search } from '../api'

export default store => next => action => {
    if (action.type === fetchSearchRequest.toString())
        search(action.payload)
            .then(response => store.dispatch(fetchSearchSuccess(response.json())))
            .then(shows => shows.map(show => show.show))
            .catch(error => store.dispatch(fetchSearchError(error)));
}
import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions/search';

import { search } from '../api'

export default store => next => action => {    
    if (action.type === searchRequest.toString())
        search(action.payload)
            .then(response => {
                console.log(response);
                store.dispatch(searchSuccess(response.map(item => item.show)));
            })
            // .then(shows => shows.map(show => show.show))
            .catch(error => store.dispatch(searchFailure(error)));
}
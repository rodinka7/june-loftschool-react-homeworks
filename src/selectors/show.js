import { createSelector } from 'reselect';

export const getError = state => state.shows.error;
export const getIsLoading = state => state.shows.isLoading;
export const getSeries = createSelector(
    state => state.shows.series,
    series => series.map(({ id, image: { original }, name, summary }) => ({
        id,
        image: original,
        name,
        summary
    }))
)
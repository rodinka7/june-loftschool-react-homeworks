import { createSelector } from 'reselect';

export const getIsLoading = state => state.search.isLoading;
export const getError = state => state.search.error;
export const getSeries = createSelector(
    state => state.search.series,
    series => series && series.map(({ id, image: { original }, name, summery }) => ({
        id,
        image: original,
        name,
        summery
    }))
)
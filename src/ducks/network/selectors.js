export const getNetworkError = state => state.network.message;
export const isNetworkErrorPresent = state =>  state.network.error !== null;
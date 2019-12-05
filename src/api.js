import axios from 'axios';

const gitHub = axios.create({
    baseURL: 'https://api.github.com/'
});

export const setAccessToken = access_token => gitHub.defaults.params = { access_token };
export const clearAccessToken = () => gitHub.defaults.params.access_token = null;
export const getTokenOwner = () => gitHub('user');
export const getUserInfo = login => gitHub(`users/${login}`);
export const getUserFollowings = login => gitHub(`users/${login}/following?pages=1&per_page=100`);
export const getUserFollowers = login => gitHub(`users/${login}/followers?pages=1&per_page=100`);
export const getUserRepos = login => gitHub(`users/${login}/repos`);

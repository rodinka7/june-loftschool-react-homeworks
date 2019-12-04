import axios from 'axios';

const gitHub = axios.create({
    baseURL: 'https://api.github.com/'
});

export const setAccessToken = accessToken => gitHub.defaults.params = { accessToken };
export const clearAccessToken = () => delete gitHub.defaults.params.accessToken;
export const getTokenOwner = () => gitHub('user');
export const getUserInfo = login => gitHub(`user/${login}`);
export const getUserFollowings = login => gitHub(`users/${login}?tab=following`);
export const getUserFollowers = login => gitHub(`users/${login}/followers?pages=1&per_page=100`);
export const getUserRepos = login => gitHub(`users/${login}/repos`);

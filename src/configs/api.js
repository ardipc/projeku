import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const USER  = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

axios.defaults.headers.common = {'Authorization': `bearer ${USER.token}`};
export const API   = axios;

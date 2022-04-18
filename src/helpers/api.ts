import axios from 'axios';
import { setToken as setTokenStorage, getToken as getTokenStorage } from './storage';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API || `${window.location.protocol}//${window.location.host}/api`,
  timeout: 20000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

const set = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export function setToken(token: string) {
  setTokenStorage(token);
  set(token);
}

set(getTokenStorage());

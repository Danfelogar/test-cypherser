import {APP_URL} from '@env';
import axios from 'axios';
// {AxiosError, AxiosResponse}

// import {setLogout} from '../redux/slices/auth';
import {AppDispatch, RootState} from '../redux/store';
import { isIOS } from '../utils';

export const serviceBase = axios.create(
  {
    baseURL: isIOS() ? APP_URL : `http://10.0.2.2:8000`,
    headers: {
      'Content-Type': 'application/json', // Asegura que el contenido sea JSON
    },
  });

export const setupAxiosInterceptors = (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  console.log({dispatch, getState});
  // serviceBasePrivate.interceptors.request.use(
  //   async config => {
  //     const {token} = getState().auth;
  //     if (DUMMY_API_KEY && token) {
  //       config.headers['app-id'] = `${DUMMY_API_KEY}`;
  //     }

  //     return config;
  //   },
  //   (err: AxiosError) => {
  //     return Promise.reject(err);
  //   },
  // );

  // serviceBasePrivate.interceptors.response.use(
  //   (response: AxiosResponse) => response,
  //   (error: AxiosError) => {
  //     const {token} = getState().auth;
  //     if (error.response?.status === 401 || !token) {
  //       dispatch(setLogout());
  //     }
  //     return Promise.reject(error);
  //   },
  // );
};
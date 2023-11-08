import axios, { CreateAxiosDefaults } from 'axios';
import { APIErrorAdapter } from '../adapters/APIError.adapter';

const httpStatusValidation = (status: number) => status >= 200 && status < 300;

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'http://localhost:3000',
  timeout: 60000,
  withCredentials: false,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  validateStatus: httpStatusValidation,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
  (fulfilledResponse) => fulfilledResponse,
  (rejectedResponse) => Promise.reject(APIErrorAdapter(rejectedResponse))
);

export { axiosInstance };

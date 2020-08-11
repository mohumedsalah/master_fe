import axios from "axios";

import { apiToken } from "../constant";

const URI = process.env.REACT_APP_API_URL;
// console.log('NODE_ENV ============>', process.env.NODE_ENV)

const AxiosBase = axios.create({
  baseURL: URI,
});
/*************before request******************** */
AxiosBase.interceptors.request.use(function (config) {
  const token = localStorage.getItem(apiToken);
  config.headers.access_token = token;
  return config;
});
/*************before request******************** */
AxiosBase.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.message &&
      error.response.data.message === "Failed to authenticate token."
    ) {
      localStorage.removeItem(apiToken);
    }
    // here you need to delete local storage and redirect to login
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default AxiosBase;

import axios from "axios";
import config from "../config";

const httpInstance = axios.create({
  baseURL: config.API_URL,
});

// Add a request interceptor
httpInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.authorization = `token ${localStorage.getItem("access_token_github")}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpInstance;

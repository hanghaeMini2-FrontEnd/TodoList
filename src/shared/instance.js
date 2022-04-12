import axios from "axios";
import { getCookie } from "./Cookie";
const USER_TOKEN = getCookie("Authorization");

const instance = axios.create({
  timeou: 1000,
  headers: {
    Authorization: USER_TOKEN,
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});
instance.defaults.baseURL = "http://3.38.179.73";
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
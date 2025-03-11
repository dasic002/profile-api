import axios from "axios";

axios.defaults.baseURL = "https://dasic002-drf-api-85265eacf671.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
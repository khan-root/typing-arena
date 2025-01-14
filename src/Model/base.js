import axios from 'axios'
import { BASEURL } from './baseUri'
import { getLocalStorage } from '../Services/__authentication';
export const authInstance = axios.create({
    baseURL: BASEURL,
    headers:{
        'Content-Type': 'Application/JSON',
    } 
})



export const axiosInstance  = axios.create({
    baseURL:BASEURL,
    headers:{
        'Content-Type' : 'Application/JSON',
    }
})



axiosInstance.interceptors.request.use(
  (config) => {
    const jwtToken = getLocalStorage();
    if (jwtToken) {
      config.headers['Authorization'] = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
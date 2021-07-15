import axios from 'axios';
import { inject } from 'vue';

export default {
  install: (app) => {
    const axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      withCredentials: true
    });
    
    app.provide('api', axiosInstance);
  }
};
export const useApi = () => inject('api');

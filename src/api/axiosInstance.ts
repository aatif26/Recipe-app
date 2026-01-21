import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 10000,
});

// Request Interceptor: Useful for adding API Keys or Auth tokens
api.interceptors.request.use(
  (config) => {
    // console.log('Starting Request', config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      console.error('Resource not found');
    }
    return Promise.reject(error);
  }
);

export default api;
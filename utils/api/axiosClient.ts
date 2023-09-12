import axios from 'axios';
import queryString from 'query-string';
import {Alert} from 'react-native';
import storageData from '../handlers/asyncStore';

let IP = '192.168.1.10';

const PORT = 5000;
const baseURL = `http://${IP}:${PORT}/api/v1`;

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: params => queryString.stringify({params}),
});

axiosClient.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storageData.getItem('user')}`,
    },
  };
});

axiosClient.interceptors.response.use(
  response => {
    // if (response && response.data) return response.data;
    return response;
  },
  (err: any) => {
    if (!err.response) {
      return Alert.alert(err);
    }
    throw err.response;
  },
);

export default axiosClient;

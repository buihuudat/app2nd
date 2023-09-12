import {LoginType, RegisterType} from '../../constants/types/authType';
import {sex} from '../../constants/types/userType';
import axiosClient from './axiosClient';

export const InitialRegiter: RegisterType = {
  msv: '',
  email: '',
  password: '',
  sex: sex.fmale,
  phone: '',
  fullname: {firstname: '', lastname: ''},
};

const authApi = {
  login: ({email, password}: LoginType) =>
    axiosClient.post('/login', {email, password}),

  register: (InitialRegiter: RegisterType) =>
    axiosClient.post('/register', InitialRegiter),

  verifyToken: () => axiosClient.post('/verify-token'),
};

export default authApi;

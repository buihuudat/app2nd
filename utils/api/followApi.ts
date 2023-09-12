import axiosClient from './axiosClient';

export const followApi = {
  getFollow: (userId: string) => axiosClient.get(`/follow/${userId}`),
};

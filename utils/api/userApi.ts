import { UserType } from "../../constants/types/userType";
import axiosClient from "./axiosClient";

const userApi = {
  get: (userId: string) => axiosClient.get(`users/${userId}`),
  update: (newUser: UserType) =>
    axiosClient.put(`users/${newUser._id}`, newUser),

  updateAvatar: (newAvatar: string, userId: string) =>
    axiosClient.put(`/users/${userId}/avatar`, newAvatar),

  updatePassword: (userId: string, newPass: string) =>
    axiosClient.put(`/users/${userId}/password`, newPass),

  delete: (userId: string) => axiosClient.patch(`/users/${userId}`),

  gets: () => axiosClient.get("/users"),
};

export default userApi;

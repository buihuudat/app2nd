import {
  PostProductStatusProps,
  PostProductType,
} from "../../constants/types/postProductType";
import axiosClient from "./axiosClient";

const postProductApi = {
  create: (newPost: PostProductType) => axiosClient.post("/posts", newPost),

  update: (newPost: PostProductType) =>
    axiosClient.put(`/posts/${newPost._id}`, newPost),

  postStatusUpdate: (postId: string, status: PostProductStatusProps) =>
    axiosClient.put(`/posts/${postId}/status`, status),

  delete: (postId: string) => axiosClient.patch(`/posts/${postId}`),

  get: (postId: string) => axiosClient.get(`/posts/${postId}`),

  gets: () => axiosClient.get("posts"),
};

export default postProductApi;

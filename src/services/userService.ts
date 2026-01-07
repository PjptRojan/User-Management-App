import type { Post, User } from "../types/user";
import api from "./api";

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

export const getUserPosts = async (userId: number): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts", {
    params: { userId },
  });
  return response.data;
};
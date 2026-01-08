import { getUserById, getUserPosts, getUsers } from "../services/userService";
import type { Post, User } from "../types/user";
import {create} from 'zustand'

interface UserStore {
  users: User[];
  selectedUser: User | null;
  posts: Post[];
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  fetchUserById: (id: number) => Promise<void>;
  fetchUserPosts: (userId: number) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
    users: [],
    selectedUser: null,
    posts: [],
    loading: false,
    error: null,

    fetchUsers: async () => {
        if(get().users.length > 0) return;

        set({loading: true, error: null})
        try {
            const users = await getUsers();
            set({ users });
        } catch (error) {
            set({ error: "Failed to load users" });
        } finally {
      set({ loading: false });
    }
    },

    fetchUserById: async (id) => {
    const existingUser = get().users.find(u => u.id === id);

    if (existingUser) {
      set({ selectedUser: existingUser });
      return;
    }

    set({ loading: true, error: null });
    try {
      const user = await getUserById(id);
      set({ selectedUser: user });
    } catch {
      set({ error: "Failed to load user" });
    } finally {
      set({ loading: false });
    }
  },

  fetchUserPosts: async (userId) => {
    if (get().posts.length > 0) return; 

    set({ loading: true, error: null });
    try {
      const posts = await getUserPosts(userId);
      set({ posts });
    } catch {
      set({ error: "Failed to load posts" });
    } finally {
      set({ loading: false });
    }
  },

}))
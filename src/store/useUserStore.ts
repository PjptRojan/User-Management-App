import { getUserById, getUserPosts, getUsers } from "../services/userService";
import type { Post, User } from "../types/user";
import { create } from 'zustand'

interface UserStore {
  users: User[];
  selectedUser: User | null;
  postsByUserId: Record<number, Post[]>;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  fetchUsers: () => Promise<void>;
  fetchUserById: (id: number) => Promise<void>;
  fetchUserPosts: (userId: number) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  selectedUser: null,
  postsByUserId: {},
  loading: false,
  error: null,
  searchQuery: "",
  setSearchQuery: (query: string) => set({searchQuery: query}),

  fetchUsers: async () => {
    if (get().users.length > 0) return;
    
    set({ loading: true, error: null });
    
    try {
      const users = await getUsers();
      set({ users, loading: false });
    } catch (error) {
      set({ error: "Failed to load users", loading: false });
    }
  },

  fetchUserById: async (id) => {
    const state = get();
    if (state.selectedUser?.id === id) return;

    set({ loading: true, error: null });
    
    try {
      const user = await getUserById(id);
      set({ selectedUser: user, loading: false });
    } catch (error) {
      set({ error: "Failed to load user", loading: false });
    }
  },

  fetchUserPosts: async (userId) => {
    const state = get();
    if (state.postsByUserId[userId]) return;

    try {
      const posts = await getUserPosts(userId);
      set({
        postsByUserId: {
          ...state.postsByUserId,
          [userId]: posts,
        },
      });
    } catch (error) {
      set({ error: "Failed to load posts" });
    }
  },
}))
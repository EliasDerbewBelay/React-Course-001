import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  login: (email) => {
    set({ user: { id: 1, name: "Demo User", email } });
  },
  logout: () => {
    set({ user: null });
  },
}));
export default useAuthStore;

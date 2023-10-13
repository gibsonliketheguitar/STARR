import { create } from "zustand";

export type T_UserState = {
  isAuth: boolean;
  token: string;
};

export type T_UserAction = {
  setToken: (token: string) => void;
  setAuth: (isAuth: boolean) => void;
  logout: () => void;
};

const defaultStore = {
  isAuth: true,
  token: "",
};

export const useUserStore = create<T_UserState & T_UserAction>((set) => ({
  ...defaultStore,
  setToken: (token: string) => set({ token }),
  setAuth: (isAuth: boolean) => set({ isAuth }),
  logout: () => set(defaultStore, true),
  test: () => {
    return true;
  },
}));

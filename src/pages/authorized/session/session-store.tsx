import { create } from "zustand";

export type T_SessionState = {
  sessions: any[];
};

export type T_SessionAction = {
  create: (payload: any) => void;
  delete: (sessionId: string) => void;
  update: (sessionId: string, payload: any) => void;
};

export const useSessionStore = create<T_SessionState & T_SessionAction>((set, get) => ({
  sessions: [],
  create: (payload: any) => set({ sessions: [...get().sessions, payload] }),
  delete: (sessionId: string) => set({ sessions: get().sessions.filter((ele) => ele.id !== sessionId) }),
  update: (sessionId: string, payload: any) =>
    set({
      sessions: get().sessions.map((ele) => {
        if (ele.id === sessionId) return payload;
        return ele;
      }),
    }),
}));

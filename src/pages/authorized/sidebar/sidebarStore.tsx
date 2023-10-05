import { create } from 'zustand'

export interface I_SidebarStore {
  isOpen: boolean,
  toggleSideBar: () => void
}

export const useSideBarStore = create((set) => ({
  isOpen: false,
  toggleSideBar: () => set((state: I_SidebarStore) => ({ isOpen: !state.isOpen }))
}))

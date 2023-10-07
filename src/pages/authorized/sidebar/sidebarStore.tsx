import { create } from 'zustand'

export type T_SidebarState = {
  isOpen: boolean,
}

export type T_SidebarAction = {
  toggleSideBar: () => void
}

export const useSideBarStore = create<T_SidebarState & T_SidebarAction>((set, get) => ({
  isOpen: false,
  toggleSideBar: () => set({ isOpen: !get().isOpen })
}))

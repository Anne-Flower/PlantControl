  import { create } from "zustand";
  import { User } from "../types/user";

  export const useID = create((set) => ({
    id: null,
    setID: (user: User) => set({ id: user.uid }),
  }));
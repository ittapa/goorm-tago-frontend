import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 1,
  increase: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
}));

import { create } from "zustand";
interface GnBStore {
  activeMenu: number;
  setActiveMenu: (id: number) => void;
}

export const useGnBStore = create<GnBStore>((set) => ({
  activeMenu: 1,
  setActiveMenu: (id: number) => set({ activeMenu: id }),
}));

interface UserInfo {
  id: number;
  name: string;
  phone_number: string;
  bookmarks: {
    location_name: string;
    road_address: string;
    longitude: string;
    latitude: string;
  }[];
}

interface UserInfoStore {
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
}

export const useUserInfo = create<UserInfoStore>((set) => ({
  userInfo: {
    id: 0,
    name: "",
    phone_number: "",
    bookmarks: [],
  },
  setUserInfo: (info: UserInfo) => set({ userInfo: info }),
}));

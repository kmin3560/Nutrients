import { createContext } from "react";

export default createContext({
  userInfo: {},
  setUserInfo: () => {},

  isLoggedIn: Boolean,
  setIsLoggedIn: () => {},
});

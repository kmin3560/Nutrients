// import WriteContext from "../WriteContext";
import UserContext from "../UserContext";
import { useState } from "react";
const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import WritePage from "./pages/write/WritePage";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./pages/main/MainPage";
import client from "./libs/client";
import UserContext from "./context/UserContext";
import { useContext, useEffect } from "react";
import Mypage from "./pages/mypage/Mypage";
import MypostPage from "./pages/mypost/MypostPage";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

function App() {
  const { userInfo, setUserInfo, setIsLoggedIn } = useContext(UserContext);
  const user = userInfo ? 1 : 0;
  useEffect(() => {
    const fetchUser = async () => {
      if (localStorage.getItem("accessToken")) {
        const accessToken = localStorage.getItem("accessToken");
        client.defaults.headers["Authorization"] = accessToken;
        const res = await client.get("/user");
        setUserInfo(res.data.user);
        setIsLoggedIn(true);
      }
    };

    fetchUser();
  }, [user, setUserInfo, setIsLoggedIn]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        {!userInfo ? (
          <>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="*" element={<MainPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypost" element={<MypostPage />} />
          </>
        )}
      </Routes>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
    </>
  );
}

export default App;

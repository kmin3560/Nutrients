import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/loading/LoadingComponent";
import MainComponent from "../../components/main/MainComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";
import { ToastsStore } from "react-toasts";

function MainContainer() {
  const [board, setBoard] = useState([]);
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setIsLoggedIn } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const onClickWrite = () => {
    if (!userInfo) {
      return alert("로그인 후 이용가능 합니다.");
    }
    navigate("/write");
  };

  const onClickPostButton = () => {
    if (!userInfo) {
      return alert("로그인 후 이용가능 합니다.");
    }
    navigate("/write");
  };

  const onClickLogout = async () => {
    localStorage.removeItem("accessToken");
    client.defaults.headers["Autorization"] = "";
    setUserInfo(null);
    setIsLoggedIn(false);
    navigate("/");
    setToggle(false);
    ToastsStore.success("로그아웃 되었습니다.");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.get("/board");
      setBoard(res.data.posts);
      setLoading(false);
    };
    fetchData();

    return () => {
      setBoard([]);
    };
  }, [setBoard]);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <MainComponent
          userInfo={userInfo}
          board={board}
          onClickWrite={onClickWrite}
          onClickPostButton={onClickPostButton}
          onClickLogout={onClickLogout}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
    </>
  );
}

export default MainContainer;

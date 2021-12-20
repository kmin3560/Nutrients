import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent from "../../components/main/MainComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";

function MainContainer() {
  const [board, setBoard] = useState([]);
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setIsLoggedIn } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
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
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.get("/board");
      setBoard(res.data.posts);
    };
    fetchData();

    return () => {
      setBoard([]);
    };
  }, [setBoard]);

  return (
    <MainComponent
      userInfo={userInfo}
      board={board}
      onClickWrite={onClickWrite}
      onClickPostButton={onClickPostButton}
      onClickLogout={onClickLogout}
      toggle={toggle}
      setToggle={setToggle}
    />
  );
}

export default MainContainer;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent from "../../components/main/MainComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";

function MainContainer() {
  const [board, setBoard] = useState([]);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const onClickWrite = () => {
    if (!userInfo) {
      return alert("로그인 후 이용가능 합니다.");
    }
    navigate("/write");
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
    />
  );
}

export default MainContainer;

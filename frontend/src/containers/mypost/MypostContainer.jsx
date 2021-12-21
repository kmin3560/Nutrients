import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/loading/LoadingComponent";
import MypostComponent from "../../components/mypost/MypostComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";

function MypostContainer() {
  const { userInfo } = useContext(UserContext);
  const [board, setBoard] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        if (userInfo) {
          const res = await client.get(`/board/user/${userInfo.id}`);
          if (res.status === 200) {
            setBoard(res.data.posts);
            setLoading(false);
          }
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    fetchMyPosts();
  }, [userInfo]);

  const onClickPostButton = () => {
    navigate("/write");
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <MypostComponent
          board={board}
          setBoard={setBoard}
          onClickPostButton={onClickPostButton}
        />
      )}
    </>
  );
}

export default MypostContainer;

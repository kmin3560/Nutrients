import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WriteActionButtonComponent from "../../components/write/WriteActionButtonComponent";
import WriteContext from "../../context/WriteContext";
import UserContext from "../../context/UserContext";

import client from "../../libs/client";

function WriteActionButtonContainer() {
  const { writeInfo, setWriteInfo } = useContext(WriteContext);
  const { userInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const onPublish = async () => {
    if (writeInfo.title === "") {
      return alert("제목을 입력하세요");
    }
    if (writeInfo.body === "") {
      return alert("내용을 입력하세요");
    }
    const formData = new FormData();
    formData.append("img", writeInfo.imgFile);
    formData.append("title", writeInfo.title);
    formData.append("body", writeInfo.body);
    formData.append("writer", userInfo.id);
    formData.append("createAt", Date.now());
    try {
      const res = await client.post("/board", formData);
      if (res.status === 200) {
        setWriteInfo({
          title: "",
          body: "",
          imgURL: "",
        });
        navigate("/");
      }
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <WriteActionButtonComponent onPublish={onPublish} onCancel={onCancel} />
  );
}

export default WriteActionButtonContainer;

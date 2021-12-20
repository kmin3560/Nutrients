import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MypageComponent from "../../components/mypage/MypageComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";

function MypageContainer() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [input, setInput] = useState(null);
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setInput(userInfo);
    setPreview(userInfo ? userInfo.image : "");
  }, [userInfo]);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onChangeImage = (e) => {
    const imgFile = e.target.files[0];
    const imgURL = URL.createObjectURL(imgFile);
    console.log(imgFile);
    console.log(input);
    setInput({
      ...input,
      image: imgFile,
    });
    setPreview(imgURL);
  };

  const onClickPutBtn = async () => {
    const { age, nickname, image } = input;
    const formData = new FormData();
    formData.append("img", image);
    formData.append("age", age);
    formData.append("nickname", nickname);

    const res = await client.put(`/user/${userInfo.id}`, formData);
    if (res.status === 200) {
      alert("회원정보 수정이 완료되었습니다.");
      navigate("/");
      setUserInfo({
        ...userInfo,
        age,
        nickname,
        image,
      });
    }
  };

  return (
    <MypageComponent
      onChangeInput={onChangeInput}
      preview={preview}
      onChangeImage={onChangeImage}
      onClickPutBtn={onClickPutBtn}
      input={input}
    />
  );
}

export default MypageContainer;

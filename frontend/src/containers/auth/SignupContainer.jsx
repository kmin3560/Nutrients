import React, { useState, useEffect } from "react";
import SignupComponent from "../../components/auth/SignupComponent";
import client from "../../libs/client";
import { useNavigate } from "react-router-dom";

function SignupContainer() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    nickname: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    return () => {
      setInput({
        email: "",
        password: "",
        nickname: "",
        age: "",
        gender: "",
      });
    };
  }, []);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmit = async (e) => {
    const { email, password, nickname, age, gender } = input;
    try {
      const res = await client.post("/user/signup", {
        email,
        password,
        nickname,
        age,
        gender,
      });
      if (res.status === 200) {
        alert("계정이 생성되었습니다!");
        navigate("/signin");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <SignupComponent
      onChangeInput={onChangeInput}
      input={input}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default SignupContainer;

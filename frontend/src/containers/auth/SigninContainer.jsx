import React, { useContext, useState, useEffect } from "react";
import SignInComponent from "../../components/auth/SigninComponent";
import client from "../../libs/client";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { ToastsStore } from "react-toasts";
function SignInContainer() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setUserInfo, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    return () => {
      setInput({
        email: "",
        password: "",
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

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = input;
      const res = await client.post("/user/signin", {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        client.defaults.headers.common[
          "Authorization"
        ] = `${res.data.accessToken}`;

        try {
          const res = await client.get("/user");
          setUserInfo(res.data.user);
          setIsLoggedIn(true);
          ToastsStore.success("로그인 성공");
        } catch (error) {
          return alert(error.response.data.message);
        }
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      } else if (error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <SignInComponent
      input={input}
      onChangeInput={onChangeInput}
      onSubmitForm={onSubmitForm}
    />
  );
}

export default SignInContainer;

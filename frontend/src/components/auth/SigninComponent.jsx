import React from "react";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "../button/buttonComponent";
import LinkComponent from "../Link/LinkComponent";

const SigninWrapper = styled.div`
  box-sizing: border-box;
  min-width: 480px;
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  align-items: center;
  margin-bottom: 6rem;
  h1 {
    margin: 0 auto;
  }
`;

const SigninForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  .text {
    margin-bottom: 3rem;
  }
  .email,
  .password {
    width: 100%;
    font-size: 2.5rem;
    border: none;
    outline: none;
    border-bottom: 1px solid grey;
  }
  .email-text,
  .password-text {
    margin-bottom: 2rem;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;
  border: none;
  margin-top: 3rem;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  background: #5a5a5a;

  background-color: #787878;
  color: white;
`;
const WhiteBox = styled.div`
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(5, 3, 3, 0.1);
  padding: 8rem;
  width: 100%;
  height: 450px;
  background-color: #fff;
  border-radius: 2px;
  @media (max-width: 1024px) {
    padding: 7rem;
  }

  @media (max-width: 1024px) {
    padding: 6rem;
  }
`;

function SigninComponent({ input, onChangeInput, onSubmitForm }) {
  return (
    <SigninWrapper>
      <Nav>
        <LinkComponent to="/">
          <MdArrowBackIosNew size={50} />
        </LinkComponent>
        <h1>로그인</h1>
      </Nav>
      <WhiteBox>
        <SigninForm onSubmit={onSubmitForm}>
          <div style={{ width: "100%", marginBottom: "3rem" }}>
            <div className="email-text">이메일</div>
            <input
              type="text"
              name="email"
              className="email"
              onChange={onChangeInput}
              value={input.email}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "3rem" }}>
            <div className="password-text">비밀번호</div>
            <input
              type="password"
              name="password"
              className="password"
              value={input.password}
              onChange={onChangeInput}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SubmitButton type="submit">로그인</SubmitButton>
          </div>
        </SigninForm>
      </WhiteBox>
    </SigninWrapper>
  );
}

export default SigninComponent;

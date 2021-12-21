import React from "react";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "../button/buttonComponent";
import AuthTemplate from "./temp/AutoTemplate";
import LinkComponent from "../Link/LinkComponent";

const SigninWrapper = styled.div`
  box-sizing: border-box;
`;
const Nav = styled.div`
  height: 15rem;
  box-sizing: border-box;
  font-size: 3rem;
  display: flex;
  align-items: center;
  width: 66rem;
  margin: 0 auto;
  h3 {
    margin: 0 auto;
    z-index: 3;
    flex-direction: column;
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

function SigninComponent({ input, onChangeInput, onSubmitForm }) {
  return (
    <SigninWrapper>
      <Nav>
        <LinkComponent to="/">
          <MdArrowBackIosNew size={50} />
        </LinkComponent>
        <h3>로그인</h3>
      </Nav>
      <AuthTemplate>
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
      </AuthTemplate>
    </SigninWrapper>
  );
}

export default SigninComponent;

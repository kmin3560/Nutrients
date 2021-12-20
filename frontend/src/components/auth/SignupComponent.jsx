import React from "react";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import LinkComponent from "../Link/LinkComponent";
import AuthTemplate from "./temp/AutoTemplate";

const SignUpNav = styled.div`
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

const SignUpFormBlock = styled.div`
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  font-size: 2rem;
  border: none;
  border-bottom: 2px solid #5a5a5a;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 1rem;
  & + & {
    margin-top: 2rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  background: #5a5a5a;

  background-color: #787878;
  color: white;
`;

function SignupComponent({ onChangeInput, input, onClickSubmit }) {
  const { email, password, nickname, age, gender } = input;
  return (
    <>
      <SignUpNav>
        <LinkComponent to="/">
          <MdArrowBackIosNew size={50} />
        </LinkComponent>
        <h3>회원가입</h3>
      </SignUpNav>
      <AuthTemplate>
        <SignUpFormBlock>
          <StyledInput
            name="email"
            value={email}
            placeholder="이메일을 입력하세요"
            onChange={onChangeInput}
          />
          <StyledInput
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={onChangeInput}
          />
          <StyledInput
            name="nickname"
            value={nickname}
            placeholder="닉네임을 입력하세요"
            onChange={onChangeInput}
          />
          <StyledInput
            name="age"
            value={age}
            placeholder="나이를 입력하세요"
            onChange={onChangeInput}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "2rem",
              fontSize: "2rem",
            }}
          >
            <span>남성</span>
            <input
              className="male"
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={onChangeInput}
            />
            <span style={{ marginLeft: "2rem" }}>여성</span>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={onChangeInput}
            />
          </div>
          <StyledButton onClick={onClickSubmit}>회원가입</StyledButton>
        </SignUpFormBlock>
      </AuthTemplate>
    </>
  );
}

export default SignupComponent;

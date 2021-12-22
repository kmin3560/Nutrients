import React from "react";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import LinkComponent from "../Link/LinkComponent";

const SignupWrapper = styled.div`
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
const SignUpNav = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  align-items: center;
  margin-bottom: 6rem;
  h1 {
    margin: 0 auto;
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

function SignupComponent({ onChangeInput, input, onClickSubmit }) {
  const { email, password, nickname, age, gender } = input;
  return (
    <SignupWrapper>
      <SignUpNav>
        <LinkComponent to="/">
          <MdArrowBackIosNew size={50} />
        </LinkComponent>
        <h1>회원가입</h1>
      </SignUpNav>
      <WhiteBox>
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
      </WhiteBox>
    </SignupWrapper>
  );
}

export default SignupComponent;

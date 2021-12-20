import React from "react";
import styled from "styled-components";

const AuthTemplateBlock = styled.div`
  // 템플릿 가운데 정렬하기
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: rgb(247, 247, 247);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 8rem;
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 2px;
`;

function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;

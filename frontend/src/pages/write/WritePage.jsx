import React from "react";
import EditorContainer from "../../containers/write/EditorContainer";
import WriteActionButtonContainer from "../../containers/write/WriteActionButtonContainer";
import WriteProvider from "../../context/providers/WriteProvider";
import styled from "styled-components";

const Title = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-size: 4rem;
`;
const WriteWrapper = styled.div`
  box-sizing: border-box;
  padding: 5rem;
  height: 100vh;
  background: rgb(247, 247, 247);
`;

function WritePage() {
  return (
    <WriteProvider>
      <WriteWrapper>
        <Title>게시물 작성</Title>
        <EditorContainer />
        <WriteActionButtonContainer />
      </WriteWrapper>
    </WriteProvider>
  );
}

export default WritePage;

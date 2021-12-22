import React from "react";
import styled from "styled-components";
import LinkComponent from "../Link/LinkComponent";
import { MdArrowBackIosNew } from "react-icons/md";
import MypostListContainer from "../../containers/mypost/MypostListContainer";
import Button from "../button/buttonComponent";

const MypostWrapper = styled.div`
  background: rgb(247, 247, 247);
  padding: 5rem 10rem;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  min-width: 480px;
  @media (max-width: 1024px) {
    padding: 5rem 0;
  }
`;

const PostWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0 auto;
`;
const Nav = styled.div`
  height: 15rem;
  box-sizing: border-box;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto 5rem;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Notice = styled.div`
  height: calc(100vh - 27rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const PostButton = styled(Button)`
  margin-top: 2rem;
  border: 1px solid grey;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  font-size: 2rem;
`;

function MypostComponent({ board, setBoard, onClickPostButton }) {
  return (
    <MypostWrapper>
      <Nav>
        <LinkComponent to="/">
          <MdArrowBackIosNew size={50} />
        </LinkComponent>
        <Title>내가 쓴 게시물</Title>
      </Nav>
      {board.length > 0 ? (
        <PostWrapper>
          {board.map((post) => (
            <MypostListContainer
              key={post._id}
              post={post}
              setBoard={setBoard}
            />
          ))}
        </PostWrapper>
      ) : (
        <Notice>
          <div>게시물을 등록하세요</div>
          <PostButton onClick={onClickPostButton}>작성하기</PostButton>
        </Notice>
      )}
    </MypostWrapper>
  );
}

export default MypostComponent;

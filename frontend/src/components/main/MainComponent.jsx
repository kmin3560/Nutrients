import React from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import Button from "../button/buttonComponent";
import PostContainer from "../../containers/main/PostContainer";
const Main = styled.main`
  margin: 10rem auto 0;
  height: calc(100vh - 10rem);
  background-color: rgb(247, 247, 247);
  padding: 3rem 5rem;
  overflow: auto;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

const Notice = styled.div`
  height: 100%;
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

const WriteButtonWrap = styled.div`
  width: 60%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const WriteButton = styled(Button)`
  border: 1px solid grey;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  font-size: 2rem;
  background: white;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
function MainComponent({
  board,
  onClickWrite,
  onClickPostButton,
  onClickLogout,
  setToggle,
  toggle,
}) {
  return (
    <div style={{ minWidth: "480px" }}>
      <NavbarComponent
        onClickLogout={onClickLogout}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Main>
        {board.length > 0 && (
          <WriteButtonWrap>
            <WriteButton onClick={onClickWrite}>글작성</WriteButton>
          </WriteButtonWrap>
        )}

        {board.length > 0 ? (
          board.map((post) => <PostContainer key={post._id} post={post} />)
        ) : (
          <Notice>
            <div>게시물을 등록하세요</div>
            <PostButton onClick={onClickPostButton}>작성하기</PostButton>
          </Notice>
        )}
      </Main>
    </div>
  );
}

export default MainComponent;

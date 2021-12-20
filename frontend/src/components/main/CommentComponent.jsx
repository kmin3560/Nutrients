import React from "react";
import styled from "styled-components";
import Button from "../button/buttonComponent";

const Count = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;
const Commnet = styled.section`
  box-sizing: border-box;
  border: none;
  border-radius: 5px 5px 5px 5px;
  background: white;
  width: 100%;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .user-info {
    display: flex;
    padding: 1.5rem;
  }
  .image {
    border-radius: 70%;
    margin-right: 1rem;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    border: 1px solid black;
  }
  .user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
  }
  .info {
    display: flex;
  }
  .nick {
    margin-right: 1rem;
  }
  .age {
    margin-right: 1rem;
  }
  .text {
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  .like-comment {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }
  .like {
    display: flex;
    align-items: center;
  }
  .like-button {
    margin: 1rem;
  }
  .comment {
    display: flex;
    align-items: center;
  }
  .comment-button {
    margin: 1rem;
  }
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
`;

const StyledInput = styled.input`
  font-size: 2.5rem;
  width: 80%;
`;

const StyledButton = styled(Button)`
  width: 15%;
  background: white;
  font-size: 2rem;
`;

function CommentComponent({ comment, onChangeComment }) {
  return (
    <>
      <Count className="count">댓글 1개</Count>
      <Commnet>
        <div className="user-info">
          <div className="image">
            <img
              className="user-image"
              src="https://lee-nutrient.s3.ap-northeast-2.amazonaws.com/1639560603977.png"
              alt=""
            />
          </div>
          <div className="info-wrap">
            <div className="info">
              <div className="nick">닉네임</div>
              <div className="age">26</div>
              <div className="gender">남성</div>
            </div>
            <div className="create-time">하루 전</div>
          </div>
        </div>
        <div className="text">
          안녕하세요 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
          dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </div>
      </Commnet>
      <InputSection>
        <StyledInput onChange={onChangeComment} type="text" value={comment} />
        <StyledButton>등록</StyledButton>
      </InputSection>
    </>
  );
}

export default CommentComponent;

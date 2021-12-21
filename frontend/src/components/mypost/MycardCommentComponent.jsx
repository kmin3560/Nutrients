import React from "react";
import styled from "styled-components";
import TimeForDay from "../../libs/time";
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
    border: 1px solid grey;
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
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
  padding: 0 2rem 1rem;
`;

const StyledInput = styled.input`
  font-size: 2.5rem;
  width: 70%;
`;

const StyledButton = styled(Button)`
  width: 15%;
  background: rgb(235, 235, 235);
  font-size: 2rem;
`;

function MycardCommentComponent({
  onChangeComment,
  comment,
  onClickCommentSubmit,
  commentCount,
  postComment,
}) {
  return (
    <>
      {commentCount > 0 && (
        <>
          <Count className="count">댓글 {commentCount}</Count>
          {postComment.map((comment) => (
            <Commnet key={comment._id}>
              <div className="user-info">
                <div className="image">
                  <img
                    className="user-image"
                    src={
                      comment.writer.image ||
                      "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                    }
                    alt=""
                  />
                </div>
                <div className="info-wrap">
                  <div className="info">
                    <div className="nick">{comment.writer.nickname}</div>
                    <div className="age">{comment.writer.age}</div>
                    <div className="gender">
                      {comment.writer.gender === "male" ? "남성" : "여성"}
                    </div>
                  </div>
                  <div className="create-time">
                    <TimeForDay date={comment.date} />
                  </div>
                </div>
              </div>
              <div className="text">{comment.text}</div>
            </Commnet>
          ))}
        </>
      )}

      <InputSection>
        <StyledInput type="text" onChange={onChangeComment} value={comment} />
        <StyledButton onClick={onClickCommentSubmit}>등록</StyledButton>
      </InputSection>
    </>
  );
}
export default MycardCommentComponent;

import React from "react";
import CardComponent from "./board/CardComponent";
import CommentComponent from "./board/CommentComponent";
import styled from "styled-components";

const PostWrapper = styled.div`
  width: 60%;
  background: white;
  margin: 0 auto;
  box-shadow: 0 0 5px #cccccc;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

function PostComponent({
  post,
  onClickLike,
  likeToggle,
  likeCount,
  commentToggle,
  onClickCommentToggle,
  comment,
  onChangeComment,
  onClickCommentSubmit,
  commentCount,
  postComment,
}) {
  return (
    <PostWrapper>
      <CardComponent
        post={post}
        onClickLike={onClickLike}
        likeToggle={likeToggle}
        likeCount={likeCount}
        onClickCommentToggle={onClickCommentToggle}
        commentToggle={commentToggle}
        commentCount={commentCount}
      />
      {commentToggle && (
        <CommentComponent
          post={post}
          commentToggle={commentToggle}
          onChangeComment={onChangeComment}
          comment={comment}
          onClickCommentSubmit={onClickCommentSubmit}
          commentCount={commentCount}
          postComment={postComment}
        />
      )}
    </PostWrapper>
  );
}

export default PostComponent;

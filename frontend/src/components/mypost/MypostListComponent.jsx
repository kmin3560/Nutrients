import React from "react";
import MycardComponent from "./MycardComponent";
import MycardCommentComponent from "./MycardCommentComponent";

function MypostListComponent({
  post,
  onClickCommentSubmit,
  onChangeComment,
  onClickCommentToggle,
  onClickLike,
  commentToggle,
  likeCount,
  likeToggle,
  comment,
  commentCount,
  postComment,
  onClickDelete,
}) {
  return (
    <>
      <MycardComponent
        post={post}
        onClickLike={onClickLike}
        likeCount={likeCount}
        commentCount={commentCount}
        onClickCommentToggle={onClickCommentToggle}
        likeToggle={likeToggle}
        commentToggle={commentToggle}
        onClickDelete={onClickDelete}
      />
      {commentToggle && (
        <MycardCommentComponent
          onClickCommentSubmit={onClickCommentSubmit}
          onChangeComment={onChangeComment}
          comment={comment}
          commentCount={commentCount}
          postComment={postComment}
        />
      )}
    </>
  );
}

export default MypostListComponent;

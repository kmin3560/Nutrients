import React, { useContext, useEffect, useState } from "react";
import PostComponent from "../../components/main/PostComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";
import { ToastsStore } from "react-toasts";

function PostContainer({ post }) {
  const { userInfo } = useContext(UserContext);
  const [likeCount, setLikeCount] = useState(post.like.length);
  const [likeToggle, setLikeToggle] = useState(
    userInfo ? (post.like.indexOf(userInfo.id) !== -1 ? true : false) : false
  );
  const [commentToggle, setCommentToggle] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCount, setCommentCount] = useState(post.comment.length);

  const [postComment, setPostComment] = useState(post.comment);

  useEffect(() => {
    const fetchCommnet = async () => {
      const res = await client.get(`/board/${post._id}`);
      setPostComment(res.data.post.comment);
    };
    fetchCommnet();
  }, [commentCount, post._id]);

  const onClickLike = async () => {
    if (!userInfo) {
      return ToastsStore.success("로그인 후 이용가능 합니다.");
    }
    if (likeToggle === true) {
      await client.post(`/board/dislike/${post._id}`, { userId: userInfo.id });
      setLikeCount((prev) => prev - 1);
    } else {
      await client.post(`/board/like/${post._id}`, { userId: userInfo.id });
      setLikeCount((prev) => prev + 1);
    }

    setLikeToggle(!likeToggle);
  };

  const onClickCommentToggle = () => {
    if (!userInfo) {
      return ToastsStore.success("로그인 후 이용가능 합니다.");
    }
    setCommentToggle(!commentToggle);
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onClickCommentSubmit = async () => {
    try {
      if (!comment) {
        return ToastsStore.success("댓글을 입력하세요");
      }
      const res = await client.post(`/board/comment/${post._id}`, {
        text: comment,
        userId: userInfo.id,
        date: Date.now(),
      });
      if (res.status === 200) {
        setCommentCount((prev) => prev + 1);
        setComment("");
      }
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  return (
    <PostComponent
      post={post}
      likeToggle={likeToggle}
      onClickLike={onClickLike}
      likeCount={likeCount}
      commentToggle={commentToggle}
      onClickCommentToggle={onClickCommentToggle}
      onChangeComment={onChangeComment}
      comment={comment}
      commentCount={commentCount}
      onClickCommentSubmit={onClickCommentSubmit}
      postComment={postComment}
    />
  );
}

export default PostContainer;

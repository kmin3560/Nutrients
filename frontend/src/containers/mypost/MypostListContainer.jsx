import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";
import MypostListComponent from "../../components/mypost/MypostListComponent";
import { ToastsStore } from "react-toasts";

function MypostListContainer({ post, setBoard }) {
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
    setCommentToggle(!commentToggle);
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onClickCommentSubmit = async () => {
    try {
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
  const onClickDelete = async () => {
    try {
      const res = await client.delete(`/board/${post._id}`);
      if (res.status === 200) {
        try {
          const response = await client.get(`/board/user/${userInfo.id}`);
          if (response.status === 200) {
            setBoard(response.data.posts);
            return ToastsStore.success("삭제되었습니다.");
          }
        } catch (error) {
          return alert(error.response.data.message);
        }
      }
    } catch (error) {
      return alert(error.response.data.message);
    }
  };
  return (
    <MypostListComponent
      post={post}
      onClickCommentSubmit={onClickCommentSubmit}
      onChangeComment={onChangeComment}
      onClickCommentToggle={onClickCommentToggle}
      onClickLike={onClickLike}
      commentToggle={commentToggle}
      likeCount={likeCount}
      likeToggle={likeToggle}
      comment={comment}
      commentCount={commentCount}
      postComment={postComment}
      onClickDelete={onClickDelete}
    />
  );
}

export default MypostListContainer;

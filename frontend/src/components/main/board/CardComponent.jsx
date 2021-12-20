import styled from "styled-components";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import Button from "../../button/buttonComponent";
const Card = styled.div`
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
  .title {
    font-size: 2rem;
    padding: 1.5rem;
  }
  .post-image {
    width: 500px;
    margin: 0 auto;
    padding: 1.5rem;
  }
  .post-image-img {
    width: 100%;
    height: 100%;
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

const Btn = styled(Button)`
  margin: 1rem;
`;

function CardComponent({
  post,
  likeToggle,
  onClickLike,
  likeCount,
  onClickCommentToggle,
  commentToggle,
  commentCount,
}) {
  return (
    <Card>
      <div className="user-info">
        <div className="image">
          <img
            className="user-image"
            src={
              post.writer.image ||
              "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
            }
            alt=""
          />
        </div>
        <div className="info-wrap">
          <div className="info">
            <div className="nick">{post.writer.nickname}</div>
            <div className="age">{post.writer.age}</div>
            <div className="gender">
              {post.writer.gender === "male" ? "남성" : "여성"}
            </div>
          </div>
          <div className="create-time">{post.createAt}</div>
        </div>
      </div>
      <div className="title">{post.title}</div>
      {post.image && (
        <div className="post-image">
          <img className="post-image-img" src={post.image} alt="/" />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: post.text }}
        className="text"
      ></div>
      <div className="like-comment">
        <div className="like">
          <Btn onClick={onClickLike}>
            {likeToggle ? (
              <AiFillLike size={25} />
            ) : (
              <AiOutlineLike size={25} />
            )}
          </Btn>
          <div className="like-count">{likeCount}</div>
        </div>
        <div className="comment">
          <Btn onClick={onClickCommentToggle}>
            {commentToggle ? (
              <FaComment size={25} />
            ) : (
              <FaRegComment size={25} />
            )}
          </Btn>
          <div className="comment-count">{commentCount}</div>
        </div>
      </div>
    </Card>
  );
}

export default CardComponent;

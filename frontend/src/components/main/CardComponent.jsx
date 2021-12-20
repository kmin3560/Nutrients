import styled from "styled-components";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import Button from "../button/buttonComponent";
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

const Btn = styled(Button)`
  margin: 1rem;
`;

function CardComponent({
  onClickLikeIcon,
  onClickCommentIcon,
  likeToggle,
  commentToggle,
  isLoggedIn,
  user,
}) {
  return (
    <Card>
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
            <div className="nick">작성자닉네임</div>
            <div className="age">작성자 나이</div>
            <div className="gender">
              {/* {user.gender === "male" ? "남성" : "여성"} */}
              작성자 성별
            </div>
          </div>
          <div className="create-time">하루 전</div>
        </div>
      </div>
      <div className="text">
        안녕하세요 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
        dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>
      <div className="like-comment">
        <div className="like">
          <Btn onClick={onClickLikeIcon}>
            {likeToggle ? (
              <AiFillLike size={25} />
            ) : (
              <AiOutlineLike size={25} />
            )}
          </Btn>
          <div className="like-count">0</div>
        </div>
        <div className="comment">
          <Btn onClick={onClickCommentIcon}>
            {commentToggle ? (
              <FaComment size={25} />
            ) : (
              <FaRegComment size={25} />
            )}
          </Btn>
          <div className="comment-count">0</div>
        </div>
      </div>
    </Card>
  );
}

export default CardComponent;

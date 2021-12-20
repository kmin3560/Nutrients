import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../button/buttonComponent";
import { AiFillSetting } from "react-icons/ai";
import UserContext from "../../context/UserContext";
import LinkComponent from "../Link/LinkComponent";

const Nav = styled.nav`
  z-index: 1;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background: rgb(235, 235, 235);
  .left {
    height: 100%;
    .logo {
      box-sizing: border-box;
      height: 100%;
      padding: 1rem;
    }
  }

  .image {
    border-radius: 70%;
    margin-right: 1rem;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
  }
  .user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .myinfo {
    display: flex;
    align-items: center;
  }
  .nickname {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const Btn = styled(Button)`
  background: white;
  margin-left: 3rem;
  font-size: 2.5rem;
`;

const MyList = styled.div`
  position: absolute;
  top: 75px;
  right: 10px;
  border: 1px solid black;
  z-index: 50;
  font-size: 2rem;
  background: white;
  padding: 1rem;
`;

const List = styled.li`
  margin-bottom: 1rem;
`;
function NavbarComponent({ onClickLogout, toggle, setToggle }) {
  const { userInfo, isLoggedIn } = useContext(UserContext);
  console.log(userInfo);
  return (
    <>
      <Nav>
        <div className="left">
          <LinkComponent to="/">
            <img
              className="logo"
              src="https://lee-nutrient.s3.ap-northeast-2.amazonaws.com/logo.png"
              alt=""
            />
          </LinkComponent>
        </div>
        <div className="right">
          <div>
            {isLoggedIn ? (
              <div className="myinfo">
                <div className="image">
                  <img
                    src={
                      userInfo.image ||
                      "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                    }
                    alt=""
                    className="user-image"
                  />
                </div>
                <div className="nickname">{userInfo.nickname}님</div>
                <div className="mypage-button">
                  <AiFillSetting
                    size={20}
                    color=""
                    style={{ cursor: "pointer" }}
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
              </div>
            ) : (
              <>
                <LinkComponent to="/signin">
                  <Btn>로그인</Btn>
                </LinkComponent>
                <LinkComponent to="/signup">
                  <Btn>회원가입</Btn>
                </LinkComponent>
              </>
            )}
          </div>
        </div>
      </Nav>
      {toggle && (
        <MyList>
          <ul>
            <List>
              <LinkComponent to="/mypage">마이 페이지</LinkComponent>
            </List>
            <li style={{ cursor: "pointer" }} onClick={onClickLogout}>
              로그아웃
            </li>
          </ul>
        </MyList>
      )}
    </>
  );
}

export default NavbarComponent;

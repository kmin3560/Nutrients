import React, { useRef } from "react";
import styled from "styled-components";
import LinkComponent from "../Link/LinkComponent";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "../button/buttonComponent";
const MypageWrapper = styled.div`
  background: rgb(247, 247, 247);
  padding: 5rem 10rem;
  box-sizing: border-box;
`;

const MypageForm = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 6rem 0 4rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0 auto;
  padding: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 2rem;
`;

const FormText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 2rem;
  width: 85%;
  outline: none;
  height: 5rem;
`;

const PutBtn = styled(Button)`
  border: 1px solid grey;
  font-size: 3rem;
  background: white;
`;

const ImageChange = styled.div`
  margin: 3rem auto;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 70%;
  width: 50rem;
  height: 50rem;
  overflow: hidden;
  cursor: pointer;
  background: white;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function MypageComponent({
  onChangeInput,
  preview,
  onChangeImage,
  onClickPutBtn,
  input,
}) {
  const imgRef = useRef(null);
  return (
    <MypageWrapper>
      <TitleWrapper>
        <div className="back">
          <LinkComponent to="/">
            <MdArrowBackIosNew size={45} />
          </LinkComponent>
        </div>
        <Title>회원정보수정</Title>
      </TitleWrapper>
      <ImageChange onClick={() => imgRef.current.click()}>
        <img
          className="image"
          src={
            preview ||
            "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
          }
          alt=""
        />
        <input
          onChange={onChangeImage}
          ref={imgRef}
          type="file"
          name="img"
          hidden={true}
        />
      </ImageChange>
      <MypageForm>
        <FormText>
          <Label>이메일:</Label>
          <StyledInput
            type="text"
            value={input ? input.email : ""}
            readOnly
            style={{ background: "none", border: "none" }}
          />
        </FormText>
        <FormText>
          <Label>닉네임:</Label>
          <StyledInput
            type="text"
            value={input ? input.nickname : ""}
            onChange={onChangeInput}
            name="nickname"
          />
        </FormText>
        <FormText>
          <Label>성별:</Label>
          <StyledInput
            type="text"
            value={input ? (input.gender === "male" ? "남성" : "여성") : ""}
            readOnly
            style={{ background: "none", border: "none" }}
          />
        </FormText>
        <FormText>
          <Label>나이:</Label>
          <StyledInput
            type="text"
            value={input ? input.age : ""}
            onChange={onChangeInput}
            name="age"
          />
        </FormText>
      </MypageForm>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PutBtn onClick={onClickPutBtn}>수정</PutBtn>
      </div>
    </MypageWrapper>
  );
}

export default MypageComponent;

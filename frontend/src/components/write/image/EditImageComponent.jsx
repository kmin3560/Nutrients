import React, { useRef } from "react";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";
const ImageWrap = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const ImageBlock = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function EditImage({ imgURL, onChangeImage }) {
  const inputFileRef = useRef(null);
  const onClickImg = () => {
    inputFileRef.current.click();
  };
  return (
    <ImageWrap onClick={onClickImg}>
      <ImageBlock
        style={{ backgroundImage: imgURL ? `url(${imgURL})` : `none` }}
      >
        {!imgURL && <AiFillCamera size={45} />}
      </ImageBlock>
      <input
        type="file"
        hidden={true}
        name="img"
        ref={inputFileRef}
        style={{ display: "invisible" }}
        onChange={onChangeImage}
      />
    </ImageWrap>
  );
}

export default EditImage;

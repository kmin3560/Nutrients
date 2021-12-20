import React, { useContext, useState } from "react";
import EditorComponent from "../../components/write/EditorComponent";
import WriteContext from "../../context/WriteContext";

function EditorContainer() {
  const { writeInfo, setWriteInfo } = useContext(WriteContext);
  const [imgInfo, setImageInfo] = useState({
    imgFile: null,
    imgURL: "",
  });

  const onChangeImage = async (e) => {
    const imgFile = e.target.files[0];
    const imgURL = URL.createObjectURL(imgFile);
    setImageInfo({
      ...imgInfo,
      imgURL,
    });

    setWriteInfo({
      ...writeInfo,
      imgFile,
    });
  };

  const onChangeField = (payload) => {
    const { key, value } = payload; //quill문법

    setWriteInfo({
      ...writeInfo,
      [key]: value,
    });
  };
  return (
    <EditorComponent
      onChangeField={onChangeField}
      imgURL={imgInfo.imgURL}
      onChangeImage={onChangeImage}
      writeInfo={writeInfo}
    />
  );
}

export default EditorContainer;

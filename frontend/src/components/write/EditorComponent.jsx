import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import EditImageComponent from "./image/EditImageComponent";

const EditorWrap = styled.div`
  padding-top: 2rem;
  width: 60%;
  margin: 0 auto;
`;

const TitleInput = styled.input`
  font-size: 1.5rem;
  font-weight: bolder;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  background: rgb(247, 247, 247);
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 1rem 0;
    text-indent: 1rem;
    min-height: 32rem;
  }
`;

function EditorComponent({ onChangeField, imgURL, onChangeImage, writeInfo }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
  ];

  const onChangeTitle = (e) => {
    const { value } = e.target;
    onChangeField({ key: "title", value });
  };
  const onChangeBody = (body) => {
    onChangeField({
      key: "body",
      value: body,
    });
  };
  return (
    <EditorWrap>
      <TitleInput
        value={writeInfo.title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요"
      />
      <QuillWrapper>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={writeInfo.body}
          onChange={(content, delta, source, editor) => {
            if (source === "user") {
              onChangeBody(editor.getHTML());
            }
          }}
        />
      </QuillWrapper>
      <EditImageComponent imgURL={imgURL} onChangeImage={onChangeImage} />
    </EditorWrap>
  );
}

export default EditorComponent;

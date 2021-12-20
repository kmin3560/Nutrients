import React from "react";
import EditorContainer from "../../containers/write/EditorContainer";
import WriteActionButtonContainer from "../../containers/write/WriteActionButtonContainer";
import WriteProvider from "../../context/providers/WriteProvider";

function WritePage() {
  return (
    <WriteProvider>
      <EditorContainer />
      <WriteActionButtonContainer />
    </WriteProvider>
  );
}

export default WritePage;

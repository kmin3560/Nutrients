import React from "react";
import MainContainer from "../../containers/main/MainContainer";
import BoardProvider from "../../context/providers/BoardProvider";

function Mainpage() {
  return (
    <BoardProvider>
      <MainContainer />
    </BoardProvider>
  );
}

export default Mainpage;

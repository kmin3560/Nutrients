import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  background: #000000;
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadingComponent() {
  return (
    <LoadingWrap>
      <ReactLoading type={"spin"} color={"#ffff"} />
    </LoadingWrap>
  );
}

export default LoadingComponent;

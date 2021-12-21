import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
function LoadingComponent() {
  const LoadingWrap = styled.div`
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    position: fixed;
    background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <LoadingWrap>
      <ReactLoading type={"bars"} color="#ffffff" />
    </LoadingWrap>
  );
}

export default LoadingComponent;

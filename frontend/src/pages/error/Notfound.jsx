import React from "react";
import styled from "styled-components";
import LinkComponent from "../../components/Link/LinkComponent";

const Wrapper = styled.div`
  background: rgb(247, 247, 247);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;

const HomeLink = styled(LinkComponent)`
  border: 1px solid black;
  margin-top: 3rem;
  font-size: 2rem;
  padding: 2px;
  border-radius: 5px;
  cursor: pointer;
`;

function Notfound() {
  return (
    <Wrapper>
      <div>404 Error</div>
      <HomeLink to="/">홈으로</HomeLink>
    </Wrapper>
  );
}

export default Notfound;

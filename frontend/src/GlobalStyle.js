import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size : 10px;
  }

  strong{
    font-weight : bolder;
  }
  em{
    font-style : italic;
  }
`;

export default GlobalStyle;

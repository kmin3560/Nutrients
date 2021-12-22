import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'GowunBatang-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  html {
    font-size : 10px;
  }

  strong{
    font-weight : bolder;
  }
  em{
    font-style : italic;
  }

  .toast {
  color: #ffffff !important;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 22px;
  height: 20px;
  min-width: 20rem;
  padding: 1rem;
  min-height: 2rem !important;
  display: flex;
  justify-content: center;
  border-radius: 8px !important;
}

.toast-info {
  background-color: rgba(33,33,33,0.8) !important;
}

.toast-warning {
  background-color: rgba(242,82,24,0.8) !important;
}

.toast-success {
  background-color: #c7c7c7 !important;
}
`;

export default GlobalStyle;

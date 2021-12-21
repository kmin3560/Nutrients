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

  .toast {
  color: #ffffff !important;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 22px;
  height: 20px;
  width: 20rem;
  padding: 1rem;
  min-height: 2rem !important;
  display: flex;
  justify-content: center;
  border-radius: 8px !important;
}

.toast-info {
  background-color: #c7c7c7 !important;
}

.toast-warning {
  background-color: #c7c7c7 !important;
}

.toast-success {
  background-color: #c7c7c7 !important;
}
`;

export default GlobalStyle;

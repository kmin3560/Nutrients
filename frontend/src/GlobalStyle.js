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
  background-color: rgba(33,33,33,0.8) !important;
}

.toast-warning {
  background-color: rgba(242,82,24,0.8) !important;
}

.toast-success {
  background-color: rgba(51,113,246,0.8) !important;
}
`;

export default GlobalStyle;

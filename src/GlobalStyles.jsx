import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
  scroll-behavior: smooth;
 }
  
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    margin: 0;
  }

  p, span, a, li, button {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
  }
`;

export default GlobalStyles;

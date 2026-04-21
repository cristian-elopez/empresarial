import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family:"Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

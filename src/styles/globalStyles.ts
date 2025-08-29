// src/styles/globalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background: #f9f9f9;
    max-width: 100%;
    padding: 1rem;
    margin: 0 auto;
  }

  main {
    display: flex;
    flex-direction: column;
  }
`;

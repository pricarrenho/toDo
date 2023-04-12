import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    h1,
    h2,
    h3,
    p,
    a {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      background: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family}, sans-serif;
      font-weight: 400;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }
  `}
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


:root {
/* colors */
  --color-white: rgb(248,248,248);
  --color-black: rgb(0,0,0);
  --color-gray: rgb(220,220,220);
  --color-dark-gray: rgb(58,58,58);
/* shadows */
--shadow-gray: 0 0.1rem 1rem 0  rgb(100,100,100, 0.6);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  background-color: var(--color-white);

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 62.5%;
  line-height: 2.4rem;
  background-color: var(--color-gray);
}
`;

export default GlobalStyles;

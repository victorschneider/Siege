import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--black);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Rubik', sans-serif, 'Inter', sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #FFF;
    --secondary: #82225B;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --color1: #A8199C;
    --color1-dark-hover: #362042;
    --color1-light-hover: #6E338E;
  }
`;

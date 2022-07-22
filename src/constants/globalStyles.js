import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:url('./constants/background.svg');
  }

  p{
    margin:0
  }


  .animation{
position: absolute;
top: 50%50%;
  }

  .bold{
    font-weight:900
  }

  .App {
  text-align: center;
}
`;

export default GlobalStyle;

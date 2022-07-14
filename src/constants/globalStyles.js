import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .inputButton{
    margin-top: 1em !important;
    padding: 0.2em 0 0.2em 0 !important;
    color: ${colors.white} !important;
    font-weight: 900 !important;
    background-color: ${colors.blue2} !important;
    &:hover{background-color: ${colors.blue3} !important}
  }

  .App {
  text-align: center;
}
`;

export default GlobalStyle;

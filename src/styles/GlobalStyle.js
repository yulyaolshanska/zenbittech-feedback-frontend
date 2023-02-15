import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{    box-sizing: border-box;}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    font-size: 18px;
  line-height: 1.8;
  /* background-color: ${(p) => p.theme.colors.background};  */
  font-family: Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



ul,
ol {
   list-style: none;
  padding: 0;
  margin: 0;
}


h1,
h2,
h3,
h4,
p,
li {
  margin: 0;
  padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  font-style: normal;
  color: inherit;
  display: block;
}
`;

export default GlobalStyle;

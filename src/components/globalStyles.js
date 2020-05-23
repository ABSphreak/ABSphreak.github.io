import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
  }

  body {
    color: black;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
    width: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: #6649b8;
  }

  main {
    margin-left: 5rem;
    padding: 1rem;
  }

  .dark {
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
  }

  .light {
    --text-primary: #1f1f1f;
    --text-secondary: #000000;
    --bg-primary: #ffffff;
    --bg-secondary: #e4e4e4;
  }

  .solar {
    --text-primary: #576e75;
    --text-secondary: #35535c;
    --bg-primary: #fdf6e3;
    --bg-secondary: #f5e5b8;
  }

  .theme-icon {
    display: none;
  }

  .dark #darkIcon {
    display: block;
  }

  .light #lightIcon {
    display: block;
  }

  .solar #solarIcon {
    display: block;
  }

  
`

export default GlobalStyle

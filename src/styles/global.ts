import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['bg-app']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-400']};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${(props) => props.theme['bg-app']};
    color: ${(props) => props.theme['color-text-default']};
    -webkit-font-smoothing: antialiased;

    transition: all 0.25s linear;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    
  }

`

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    font-family: ${(props) => props.theme.font};
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }
`

export default GlobalStyle

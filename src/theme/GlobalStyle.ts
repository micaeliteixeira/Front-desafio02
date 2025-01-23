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
    font-size: 15px
  }

  .container-main {
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  flex-direction: column;
  }
`

export default GlobalStyle

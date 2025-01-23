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

  .react-datepicker__input-container >input {
  background-color: #1d2938 !important;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  width: 226px;
  height: 37px;
  
  }
  .react-datepicker__input-container input:focus {
    box-shadow:0 0 0 1px ${(props) => props.theme.secondaryColor} !important;
    transform: none;
    border-color:${(props) => props.theme.secondaryColor} !important;
    outline: none
  }
 
`

export default GlobalStyle

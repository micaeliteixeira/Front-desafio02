import { Switch } from '@mui/material'
import styled from 'styled-components'
import theme from '../../theme/theme'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const ContainerLogin = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Logo = styled.h1`
  font-size: 30px;
  line-height: 36.31px;
  font-weight: 400;
`

export const ContainerInputsButton = styled.div`
  width: 278px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const CustomSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.blueGray
  },

  '& .MuiSwitch-track': {
    backgroundColor: theme.blueDark
  },

  '& .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(20px)',
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.secondaryColor
    },
    '& + .MuiSwitch-track': {
      backgroundColor: theme.blueDark
    }
  }
}))

export const CadastroSpan = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 15px;
  line-height: 18.15px;
  cursor: not-allowed;
`

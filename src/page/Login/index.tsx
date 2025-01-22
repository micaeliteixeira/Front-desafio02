import * as S from './styled'

import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useTheme } from 'styled-components'

const Login = () => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(true)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const handleButtonEntrar = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError(true)
      setHelperText('Por favor, insira um e-mail válido.')
    } else {
      setError(false)
      setHelperText('')
    }
  }

  return (
    <S.Container>
      <S.ContainerLogin>
        <S.Logo>
          <span style={{ color: theme.secondaryColor }}>OS</span>Station
        </S.Logo>
        <S.ContainerInputsButton>
          <TextField
            label="E-MAIL"
            sx={{
              backgroundColor: theme.blueDark,
              border: 'none',

              '& .MuiInputBase-input': {
                color: error ? 'red' : 'white'
              },
              '& .Mui-focused': {
                color: error ? 'red !important' : '#1976d2 !important'
              }
            }}
            slotProps={{
              inputLabel: {
                style: {
                  color: theme.blueGray,
                  fontSize: '15px',
                  fontFamily: theme.font,
                  lineHeight: '18.15px'
                }
              }
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={error}
            helperText={helperText}
          />
          <FormControl variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{
                color: theme.blueGray,
                fontSize: '15px',
                fontFamily: theme.font,
                lineHeight: '18.15px'
              }}
            >
              SENHA
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(event) => event.preventDefault()}
                    onMouseUp={(event) => event.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="SENHA"
              sx={{
                backgroundColor: theme.blueDark,
                color: 'white',
                border: 'none'
              }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.secondaryColor,
              color: theme.primaryColor,
              border: 'none',
              marginTop: '13px',
              fontSize: '16px',
              fontFamily: theme.font,
              lineHeight: '19.36px'
            }}
            onClick={handleButtonEntrar}
          >
            ENTRAR
          </Button>
          <FormGroup>
            <FormControlLabel
              control={
                <S.CustomSwitch
                  checked={auth}
                  onChange={(event) => setAuth(event.target.checked)}
                  aria-label="login switch"
                />
              }
              label={'PERMANECER LOGADO'}
              sx={{
                margin: '0 0 0 auto',
                '& .MuiFormControlLabel-label': {
                  color: 'white',
                  fontSize: '15px',
                  fontFamily: theme.font
                }
              }}
            />
          </FormGroup>
          <S.CadastroSpan>cadastro</S.CadastroSpan>
        </S.ContainerInputsButton>
      </S.ContainerLogin>
    </S.Container>
  )
}

export default Login

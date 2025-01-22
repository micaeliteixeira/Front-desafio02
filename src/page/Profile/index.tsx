import * as S from './styled'

import { Avatar } from '@mui/material'
import Head from '../../component/Head'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const Login = () => {
  const information = [
    { label: 'Nome:', value: 'Teste' },
    { label: 'E-mail:', value: 'teste@g.com' },
    { label: 'Ultimo login:', value: '16/01/2025 às 15:00' }
  ]

  return (
    <div>
      <Head />
      <S.ContainerText>
        <Avatar sx={{ background: '#15202E', width: '100px', height: '100px' }}>
          <PersonOutlineIcon sx={{ fontSize: '60px' }} />
        </Avatar>

        {information.map((item) => (
          <S.InformationDiv key={item.label}>
            <S.label>{item.label}</S.label>
            <span style={{ fontSize: '15px' }}>{item.value}</span>
          </S.InformationDiv>
        ))}
      </S.ContainerText>
    </div>
  )
}

export default Login

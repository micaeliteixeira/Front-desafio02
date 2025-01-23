import * as S from './styled'

import { AuthContext } from '../../contexts/AuthContext'
import { Avatar } from '@mui/material'
import Breadcrumb from '../../component/Breadcrumb'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useContext } from 'react'

const Login = () => {
  const { user } = useContext(AuthContext)
  const information = [
    { label: 'Nome:', value: user?.name },
    { label: 'E-mail:', value: user?.email }
  ]

  return (
    <>
      <Breadcrumb page="PERFIL" url="/profile" />

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
    </>
  )
}

export default Login

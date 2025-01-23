import * as S from './styled'

import { Avatar, Button, Drawer } from '@mui/material'
import {
  HomeOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PermIdentityOutlined
} from '@mui/icons-material'
import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import MenuSharpIcon from '@mui/icons-material/MenuSharp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useTheme } from 'styled-components'

const Head = () => {
  const theme = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)
  const isLoginPage = location?.pathname === '/'

  if (isLoginPage) {
    return
  }
  const DrawerList = () => {
    const { signOut } = useContext(AuthContext)

    return (
      <S.ContainerDrawer>
        <S.ContainerDrawerHead>
          <KeyboardArrowLeft onClick={() => setOpenMenu(false)} sx={{ cursor: 'pointer' }} />
        </S.ContainerDrawerHead>
        <S.Input placeholder="Buscar" />
        <S.Menu onClick={() => navigate('/home')}>
          <S.ContainerDrawerValue>
            <HomeOutlined />
            <span>Home</span>
          </S.ContainerDrawerValue>
          <KeyboardArrowRight />
        </S.Menu>
        <S.Menu onClick={() => navigate('/profile')}>
          <S.ContainerDrawerValue>
            <PermIdentityOutlined />
            <span>Perfil</span>
          </S.ContainerDrawerValue>
          <KeyboardArrowRight />
        </S.Menu>

        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.secondaryColor,
            color: theme.primaryColor,
            border: 'none',
            marginTop: 'auto',
            fontSize: '16px',
            fontFamily: theme.font,
            lineHeight: '19.36px'
          }}
          onClick={signOut}
        >
          SAIR
        </Button>
      </S.ContainerDrawer>
    )
  }

  return (
    <>
      <S.Container>
        <MenuSharpIcon
          sx={{ color: theme.secondaryColor, fontSize: '40px', cursor: 'pointer' }}
          onClick={() => setOpenMenu(true)}
        />
        <S.Logo onClick={() => (window.location.href = `/`)}>
          <span style={{ color: theme.secondaryColor }}>OS</span>Station
        </S.Logo>
        <Avatar
          sx={{ background: '#15202E', marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => (window.location.href = `/profile`)}
        >
          <PersonOutlineIcon />
        </Avatar>
      </S.Container>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <DrawerList />
      </Drawer>
    </>
  )
}

export default Head

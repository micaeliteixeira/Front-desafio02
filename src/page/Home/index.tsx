import * as S from './styled'

import { AuthContext } from '../../contexts/AuthContext'
import Breadcrumb from '../../component/Breadcrumb'
import { SearchOutlined } from '@mui/icons-material'
import Upload from '../../assets/Upload'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <>
      <Breadcrumb />
      <S.ContainerText>Seja bem-vindo {user?.name}!</S.ContainerText>
      <S.ContainerMenu>
        <S.Menu onClick={() => navigate('/upload')}>
          <S.ContainerMenuValue>
            <Upload />
            <span>UPLOAD</span>
          </S.ContainerMenuValue>
        </S.Menu>
        <S.Menu onClick={() => navigate('/orders')}>
          <S.ContainerMenuValue>
            <SearchOutlined sx={{ color: '#00FFA3' }} />
            <span>PEDIDOS</span>
          </S.ContainerMenuValue>
        </S.Menu>
      </S.ContainerMenu>
    </>
  )
}

export default Home

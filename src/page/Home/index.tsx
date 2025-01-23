import * as S from './styled'

import { AuthContext } from '../../contexts/AuthContext'
import Breadcrumb from '../../component/Breadcrumb'
import { useContext } from 'react'

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Breadcrumb />
      <S.ContainerText>Seja bem-vindo {user?.name}!</S.ContainerText>
    </>
  )
}

export default Home

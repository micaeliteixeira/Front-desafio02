import styled from 'styled-components'

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 40px;
  flex-direction: column;
`

export const ContainerMenu = styled.div`
  display: flex;
  width: 100%%;
  justify-content: space-around;
  margin-top: 100px;
`

export const Menu = styled.div`
  display: flex;
  width: 30%;
  height: 100px;
  gap: 10px;
  padding: 8px 12px;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.blueDark};

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`

export const ContainerMenuValue = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

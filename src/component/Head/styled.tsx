import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: ${({ theme }) => theme.blueDark};
  align-items: center;
  padding: 0 30px;
`

export const Logo = styled.div`
  font-size: 25px;
  line-height: 36.31px;
  font-weight: 400;
  cursor: pointer;
  margin-left: 20px;
`

export const ContainerDrawer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 30px 16px;
  flex-direction: column;
  height: 100vh;
`

export const ContainerDrawerHead = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  justify-content: flex-end;
  padding-bottom: 16px;
`

export const Input = styled.input`
  background-color: #f4f4f4;
  border: none;
  padding: 8px 12px;
  height: 50px;

  &:-ms-input-placeholder {
    font-size: 16px;
    color: #ccc !important;
  }
`
export const Menu = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 8px 12px;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`

export const ContainerDrawerValue = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

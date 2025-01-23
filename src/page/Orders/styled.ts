import styled from 'styled-components'

export const ContainerInput = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 681px;
  height: 101px;
  background-color: ${({ theme }) => theme.blueDark};
  padding: 20px;
`

export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1d2938;
  margin-top: 20px;
`
export const ContainerListHead = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 16px 26px;
`

export const ContainerListTitle = styled.div`
  display: flex;
  gap: 10px;
`
export const ContainerListTitles = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 16px 26px;
  color: black;
  justify-content: space-between;
`

export const ContainerListValues = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 16px 26px 16px 40px;
  color: white;
  justify-content: space-between;
`

export const ContainerListFooter = styled.div`
  width: 100%;
  display: flex;

  padding: 16px 26px;
  background-color: ${({ theme }) => theme.blueDark};
`

export const Input = styled.input`
  background-color: #1d2938;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  width: 226px;
  height: 37px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.secondaryColor};
  }

  &:-ms-input-placeholder {
    color: #ccc !important;
  }
`

export const Label = styled.p`
  font-size: 15px;
  line-height: 18.15px;
  color: ${({ theme }) => theme.secondaryColor};
`

export const ContainerLabelINput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ContainerText = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 216px;
  background-color: #1d2938;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 24.2px;
  gap: 20px;
`

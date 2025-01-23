import styled from 'styled-components'

export const ContainerText = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 216px;
  background-color: ${({ theme }) => theme.blueDark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 24.2px;
  gap: 20px;
  cursor: pointer;
`

export const ContainerUpload = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 24px;
  line-height: 29.05px;
  color: ${({ theme }) => theme.secondaryColor};
`

import styled from 'styled-components'

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 40px;
  flex-direction: column;
  gap: 24px;
`

export const InformationDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: baseline;
  gap: 8px;
  justify-content: center;
`
export const label = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: 600;
`

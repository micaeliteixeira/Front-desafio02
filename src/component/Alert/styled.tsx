import styled from 'styled-components'

interface AlertContainerProps {
  color: string
  top: boolean
}
export const AlertContainer = styled.div<AlertContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.blueDark};
  color: #ffffff;
  border-left: solid 20px ${({ color, theme }) => color || theme.secondaryColor};
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  right: 20px;
  min-width: 300px;
  z-index: 1000;
  margin-top: 20px;
  top: ${({ top }) => (top ? '62px' : '0px')};
`

export const AlertMessage = styled.p`
  font-size: 14px;
  margin: 0;
`

export const AlertIcon = styled.span`
  font-size: 18px;
  margin: 10px 0 0 10px;
  color: ${({ color, theme }) => color || theme.secondaryColor};
`

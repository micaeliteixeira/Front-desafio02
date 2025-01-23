import styled from 'styled-components'

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: baseline;
`

export const Bar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.blueDark};
  border-radius: 10px;
`

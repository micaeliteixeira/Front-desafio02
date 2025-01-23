import * as S from './styled'

import { Breadcrumbs, Link } from '@mui/material'

import { useTheme } from 'styled-components'

interface BreadcrumbProps {
  page?: string
  url?: string
}

const Breadcrumb = ({ page, url }: BreadcrumbProps) => {
  const theme = useTheme()
  return (
    <S.BreadcrumbContainer>
      <Breadcrumbs sx={{ width: '15%', color: 'white', fontFamily: '"Inter", serif' }}>
        <Link underline="hover" color={!page ? theme.secondaryColor : 'white'} href="/home">
          HOME
        </Link>
        {page && (
          <Link
            underline="hover"
            color={theme.secondaryColor}
            sx={{ fontWeight: '700' }}
            href={url}
          >
            {page}
          </Link>
        )}
      </Breadcrumbs>
      <S.Bar />
    </S.BreadcrumbContainer>
  )
}

export default Breadcrumb

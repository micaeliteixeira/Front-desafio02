import 'react-datepicker/dist/react-datepicker.css'

import * as S from './styled'

import { Search, SearchOff } from '@mui/icons-material'

import Breadcrumb from '../../component/Breadcrumb'
import { Button } from '@mui/material'
import DatePicker from 'react-datepicker'
import { formatDate } from '../../utils/formatDate'
import { getOrders } from '../../service/getOrders'
import { useState } from 'react'
import { useTheme } from 'styled-components'

const Orders = () => {
  const theme = useTheme()
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
  const [startDate, endDate] = dateRange
  const [value, setValue] = useState('')
  const [list, setList] = useState<any>([])

  const handleSearch = async () => {
    const response = await getOrders({
      startDate: startDate && formatDate(startDate),
      endDate: endDate && formatDate(endDate),
      orderId: value
    })

    setList(response)
  }

  const handleClearSearch = () => {
    setDateRange([null, null])
    setValue('')
    setList([])
  }

  const sum = list?.reduce((sum: any, order: { value: any }) => sum + order.value, 0)

  return (
    <>
      <Breadcrumb page="PEDIDOS" url="/orders" />
      <S.ContainerInput>
        <S.ContainerLabelINput>
          <S.Label>Periodo</S.Label>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update)
            }}
            placeholderText="mm/dd/aaaa - mm/dd/aaaa"
          />
        </S.ContainerLabelINput>

        <S.ContainerLabelINput>
          <S.Label>ID do Produto</S.Label>
          <S.Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="123456" />
        </S.ContainerLabelINput>

        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.secondaryColor,
            color: 'black',
            border: 'none',
            margin: '15px 0px 0px auto',
            fontSize: '16px',
            fontFamily: theme.font,
            lineHeight: '19.36px',
            minWidth: '154px',
            height: '60px'
          }}
          onClick={handleSearch}
        >
          <Search sx={{ color: 'black' }} />
          Enviar
        </Button>
      </S.ContainerInput>

      <S.ContainerList>
        {list?.lenght > 0 ? (
          <>
            <S.ContainerListHead>
              <S.ContainerListTitle>
                <span style={{ color: theme.secondaryColor }}>ID DO PEDIDO:</span>
                <span>{list[0]?.orderId}</span>
              </S.ContainerListTitle>
              <S.ContainerListTitle>
                <span style={{ color: theme.secondaryColor }}>USUÁRIO:</span>
                <span>{list[0]?.name}</span>
              </S.ContainerListTitle>
              <S.ContainerListTitle style={{ marginLeft: 'auto' }}>
                <span style={{ color: theme.secondaryColor }}>DATA:</span>
                <span>{list[0]?.date}</span>
              </S.ContainerListTitle>
            </S.ContainerListHead>
            <S.ContainerListTitles>
              <span>ID DO PRODUTO</span>
              <span>VALOR</span>
            </S.ContainerListTitles>
            {list?.map((item: any) => (
              <S.ContainerListValues key={item.id}>
                <span>{item?.id}</span>
                <span>R$ {item?.value}</span>
              </S.ContainerListValues>
            ))}
            <S.ContainerListFooter>
              <S.ContainerListTitle
                style={{
                  marginLeft: 'auto',
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: '24.2px'
                }}
              >
                <span style={{ color: theme.secondaryColor }}>TOTAL:</span>
                <span>R$ {sum}</span>
              </S.ContainerListTitle>
            </S.ContainerListFooter>
          </>
        ) : (
          <S.ContainerText>
            <SearchOff sx={{ fontSize: '40px', color: theme.secondaryColor }} />
            <span style={{ color: 'white' }}>NENHUM RESULTADO ENCONTRADO</span>
          </S.ContainerText>
        )}
      </S.ContainerList>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.secondaryColor,
          color: theme.primaryColor,
          border: 'none',
          margin: '15px 0px 0px auto',
          fontSize: '16px',
          fontFamily: theme.font,
          lineHeight: '19.36px',
          width: '355px',
          height: '46px'
        }}
        onClick={handleClearSearch}
      >
        lIMPAR PESQUISA
      </Button>
    </>
  )
}

export default Orders

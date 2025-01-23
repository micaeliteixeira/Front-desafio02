import axios, { AxiosError } from 'axios'

export const getOrders = async (query?: {
  startDate?: string | null
  endDate?: string | null
  orderId: string
}) => {
  try {
    const response = await axios.get('http://localhost:3001/api/orders', {
      params: {
        ...(query?.startDate && { startDate: query?.startDate }),
        ...(query?.endDate && { endDate: query?.endDate }),
        ...(query?.orderId && { orderId: query?.orderId })
      }
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data || error.message
    } else {
      return error
    }
  }
}

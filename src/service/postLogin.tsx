import axios, { AxiosError } from 'axios'

interface DataLoginProps {
  password: string
  email: string
}

export const postLogin = async (dataLogin: DataLoginProps) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', dataLogin)

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data || error.message
    } else {
      return error
    }
  }
}

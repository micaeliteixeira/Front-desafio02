import axios, { AxiosError } from 'axios'

export const postUpload = async (formData: FormData) => {
  try {
    const response = await axios.post('http://localhost:3001/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
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

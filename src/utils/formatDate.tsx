export const formatDate = (dateString: any) => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    return null
  }

  const year = date.getFullYear()

  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

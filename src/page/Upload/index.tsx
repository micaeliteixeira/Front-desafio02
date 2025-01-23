import * as S from './styled'

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from 'react'
import { Check, ReportGmailerrorred } from '@mui/icons-material'

import Alert from '../../component/Alert'
import Breadcrumb from '../../component/Breadcrumb'
import { Button } from '@mui/material'
import UploadIcon from '../../assets/Upload'
import { postUpload } from '../../service/postUpload'
import { useTheme } from 'styled-components'

const Upload = () => {
  const theme = useTheme()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [returnUpload, setReturnUpload] = useState<any>([])

  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleSendFile = async () => {
    if (!file) {
      setReturnUpload({ type: 'ERROR', message: 'Nenhum arquivo selecionado!' })

      return
    }

    const formData = new FormData()
    formData.append('file', file)

    const response = await postUpload(formData)
    setReturnUpload(
      response?.data
        ? { type: 'SUCCESS', message: response?.message }
        : { type: 'ERROR', message: response?.error }
    )
    setFile(null)
  }

  useEffect(() => {
    if (returnUpload.length === 0) {
      const timer = setTimeout(() => {
        setReturnUpload([])
      }, 5000)

      return () => clearTimeout(timer)
    } else {
    }
  }, [returnUpload])

  return (
    <>
      <Alert
        message={returnUpload?.message}
        icon={
          returnUpload?.type === 'ERROR' ? (
            <ReportGmailerrorred sx={{ color: 'red' }} />
          ) : (
            <Check sx={{ color: theme.secondaryColor }} />
          )
        }
        visible={returnUpload?.message}
        color={returnUpload?.type === 'ERROR' ? 'red' : theme.secondaryColor}
        top={true}
      />
      <Breadcrumb page="UPLOAD" url="/upload" />

      <S.ContainerText>
        {!file ? (
          <>
            Clique ou arraste seu arquivo .txt para enviar
            <S.ContainerUpload
              onClick={handleClickUpload}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <UploadIcon /> Arquivo
              <input
                type="file"
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={handleSelectFile}
              />
            </S.ContainerUpload>
          </>
        ) : (
          <>Arquivo selecionado: {file?.name}</>
        )}
      </S.ContainerText>
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
        onClick={handleSendFile}
      >
        Enviar
      </Button>
    </>
  )
}

export default Upload

import * as S from './styled'

import React, { useEffect, useRef, useState } from 'react'

interface AlertProps {
  message: string
  icon: React.ReactNode
  visible?: boolean | string
  color: string
  top?: boolean
}

const Alert = ({ message, icon, visible = false, color, top = 'false' }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(visible)
  const alertRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(visible)

    if (visible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [visible])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (alertRef?.current && !alertRef?.current.contains(event.target as Node)) {
        setIsVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <S.AlertContainer ref={alertRef} color={color} top={top}>
      <S.AlertMessage>{message}</S.AlertMessage>
      {icon && <S.AlertIcon color={color}>{icon}</S.AlertIcon>}
    </S.AlertContainer>
  )
}

export default Alert

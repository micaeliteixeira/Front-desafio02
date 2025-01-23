import { ReactNode, useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}

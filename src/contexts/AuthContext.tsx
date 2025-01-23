import { ReactNode, createContext, useEffect, useState } from 'react'

import { postLogin } from '../service/postLogin'

interface AuthProviderProps {
  children: ReactNode
}

interface UserData {
  email: string
  password: string
}

interface AuthContextProps {
  user: Record<string, string> | null
  errorService: string
  signIn: (userData: UserData, auth: boolean) => Promise<void | unknown>
  signOut: () => void
  setErrorService: any
  loading: boolean
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  errorService: '',
  setErrorService: () => {},
  signIn: async () => {},
  signOut: () => {},
  loading: true
})

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Record<string, string> | null>(null)
  const [errorService, setErrorService] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user')
    if (!storedUser) return

    try {
      const parsed = JSON.parse(storedUser)
      console.log(parsed)
      setUser(parsed)
    } catch (e) {
      console.error('Error parsing localStorage user:', e)
      localStorage.removeItem('user')
    }

    setLoading(false)
  }, [])

  const signIn = async (userData: UserData, auth: boolean) => {
    const login = await postLogin(userData)

    if (login.error) {
      setErrorService(login.error)
      return
    }

    const armazenamento = auth ? localStorage : sessionStorage
    armazenamento.setItem('user', JSON.stringify(login.user))
    window.location.href = '/home'
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, errorService, setErrorService, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }

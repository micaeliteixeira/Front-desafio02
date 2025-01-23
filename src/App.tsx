import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext.tsx'
import GlobalStyle from './theme/GlobalStyle.ts'
import Head from './component/Head/index.tsx'
import Home from './page/Home/index.tsx'
import Login from './page/Login'
import Orders from './page/Orders/index.tsx'
import Profile from './page/Profile'
import { ProtectedRoute } from './hook/ProtectedRoute.tsx'
import { ThemeProvider } from 'styled-components'
import Upload from './page/Upload/index.tsx'
import theme from './theme/theme.ts'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Head />
          <div className="container-main">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalStyle from './theme/GlobalStyle.ts'
import Home from './page/Home/index.tsx'
import Login from './page/Login'
import Orders from './page/Orders/index.tsx'
import Profile from './page/Profile'
import { ThemeProvider } from 'styled-components'
import Upload from './page/Upload/index.tsx'
import theme from './theme/theme.ts'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

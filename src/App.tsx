import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Page/Login'
import Profile from './Page/Profile'
import Search from './Page/Search'
import Upload from './Page/Upload'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Link, Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/UI/Navbar.jsx/Navbar'
import { About } from './pages/About'
import { Nothing } from './pages/Nothing'
import { Post } from './pages/Post'
import './styles/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/posts' element={<Post />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Nothing />} />
      </Routes>
    </div>
  )
}

export default App

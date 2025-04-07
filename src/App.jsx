
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Project from './components/Project'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'

function App() {

  return (
    <div className=' bg-gradient-to-r from-gray-900 via-blue-900 to-black h-full'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contacts' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App

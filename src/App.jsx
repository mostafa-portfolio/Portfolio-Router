import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Side from './components/Side'
import Landing from './Pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/certificates' element={<Certificates/>}/>
            <Route path='/side' element={<Side/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



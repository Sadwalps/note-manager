import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Footer from './Footer'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

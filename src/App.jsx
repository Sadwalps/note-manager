import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Addednotes from './Addednotes'
import Pagenotfound from './Pagenotfound'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addednotes' element={<Addednotes/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
   
    </>
  )
}

export default App

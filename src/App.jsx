import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Admin from './components/Admin'

const App = () => {
  return (
    
    
   
    <div>
      <Routes> 
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/player/:id' element={<Player />}/>
        <Route path='/admin' element={<Admin/>}/>
       
      </Routes>
    </div>
     
  )
}

export default App

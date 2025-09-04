import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Sign_up from './component/Sign_up'

function App() {



  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign_up' element={<Sign_up />} />
        <Route path='/Dash' element={<Navbar />} />
      </Routes>
    </div>
  )
}

export default App
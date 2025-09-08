import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Sign_up from './component/Sign_up'
import Dashboard from './component/Dashboard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {



  return (
    <div className='w-full min-h-screen select-none '>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign_up' element={<Sign_up />} />
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
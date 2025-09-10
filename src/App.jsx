import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Sign_up from './component/Sign_up'
import Dashboard from './component/Dashboard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Eye_prd from './component/Eye_prd'
import { Loader } from "./component/Loader";
import { App_context } from './context'

function App() {

  const { loader } = useContext(App_context)

  return (


    <div className='w-full min-h-screen select-none '>

      <div className={`w-full h-screen fixed top-0 left-0 ${ loader ? "visible opacity-100 " : "invisible opacity-0" } flex justify-center transition-all duration-150 ease-linear items-center z-30 backdrop-blur-sm `}>
        <Loader variant="cube" className='scale-150' >
          <span className="text-black dark:text-white">Almost there…</span>
        </Loader>
      </div>

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
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<Sign_up />} />
        <Route path='/eye' element={<Eye_prd />} />
      </Routes>
    </div>

  )
}

export default App
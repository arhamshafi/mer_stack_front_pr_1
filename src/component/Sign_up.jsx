import React, { useContext } from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function Sign_up() {
    const navigate = useNavigate()
    return (
        <div className='w-full min-h-screen flex justify-center items-center back'>
            <div className='w-[400px] h-[500px] rounded-xl bg-white relative select-none '>
                <h1 className='text-center text-black font-bold text-2xl tracking-[2px] tb_sh uppercase mt-10 '>Sign Up</h1>
                <input type="text" className='w-[80%] pr-6  h-[30px] border-b border-gray-500 text-black font-bold  mx-auto  block mt-5 outline-none ' placeholder='Username' name='name' />
                <input type="email" className='w-[80%] pr-6 h-[30px] border-b border-gray-500 text-black font-bold  mx-auto block mt-5 outline-none placeholder:text-black/50 ' placeholder='E-Mail ' name='email' />
                <CiUser className='absolute top-[19.8%] cursor-text right-10 text-xl' />
                <MdOutlineMailOutline className='absolute text-black/60 top-[29.6%] cursor-text right-10 text-xl' />
                <TiContacts className='absolute text-black/60 top-[39.6%] cursor-text right-10 text-xl' />
                <TbLockPassword className='absolute text-black/60 top-[49.6%] cursor-text right-10 text-xl' />
                <input type="number" className='w-[80%] pr-6 h-[30px] border-b border-gray-500 text-black font-bold  mx-auto block mt-5 outline-none placeholder:text-black/50 no_spinner ' placeholder='Phone Number ' name='number' />
                <input type="password" className='w-[80%] pr-6 h-[30px] border-b border-gray-500 text-black font-bold  mx-auto block mt-5 outline-none placeholder:text-black/50 ' placeholder='Password ' name='password' />
                <button className='block mt-10 w-[80%] h-[40px] back rounded-3xl mx-auto text-white font-bold cursor-pointer active:scale-98 transition-all duration-200 ease-out'>Sign Up </button>
                <p className='text-center text-black/60 mt-5 '>or login using</p>
                <div className='flex justify-center items-center gap-3 mx-auto w-max mt-4'>
                    <button className='hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={25} height={25} aria-label="Google">
                        <path fill="#4285F4" d="M23.5 12.8c2.9 0 5.4 1 7.4 2.9l5.5-5.6C33.9 6.1 28.9 4 23.5 4 14.9 4 7.9 9.7 5.6 17.4l6 4.7C13.5 16.2 18 12.8 23.5 12.8z" />
                        <path fill="#34A853" d="M46.5 24.3c0-1.6-.1-3.1-.4-4.6H23.5v9h12.7c-.5 2.7-2 5-4.3 6.6l6.3 4.9C43.9 37.6 46.5 31.3 46.5 24.3z" />
                        <path fill="#FBBC05" d="M11.6 29.9c-.7-2-1.2-4.1-1.2-6.3s.4-4.3 1-6.3l-6-4.7C2.2 17.7 1 20.8 1 24s1.1 6.3 3 9.4l7.6-3.5z" />
                        <path fill="#EA4335" d="M23.5 44c5.4 0 10.4-1.8 14.2-4.9l-6.3-4.9c-2 1.4-4.6 2.2-7.9 2.2-5.6 0-10.3-3.8-12-9.1l-7.6 3.5C7.9 40.3 14.9 44 23.5 44z" />
                    </svg></button>
                    <button className='hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} aria-label="Twitter">
                        <path fill="#1DA1F2" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.675 4.675 0 0 0 2.048-2.576 9.34 9.34 0 0 1-2.965 1.135 4.66 4.66 0 0 0-7.94 4.247A13.236 13.236 0 0 1 1.64 3.16a4.66 4.66 0 0 0 1.442 6.213 4.61 4.61 0 0 1-2.112-.583v.06a4.66 4.66 0 0 0 3.737 4.567 4.68 4.68 0 0 1-2.103.08 4.66 4.66 0 0 0 4.348 3.233A9.348 9.348 0 0 1 .96 19.54a13.2 13.2 0 0 0 7.16 2.098c8.592 0 13.304-7.116 13.304-13.29 0-.203-.005-.405-.015-.606a9.52 9.52 0 0 0 2.335-2.494z" />
                    </svg></button>
                    <button className='hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer '><FaInstagram className='text-orange-600 w-[25px] h-[25px] ' /></button>
                </div>
                <p className='hover:text-pink-600 mt-3 text-black/60 hover:underline text-sm cursor-pointer text-center' onClick={()=>navigate("/")} >Already Have Account ? Login</p>
            </div>
        </div>
    )
}

export default Sign_up
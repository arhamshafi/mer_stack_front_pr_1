import React, { useContext } from 'react'
import { FaAngleUp } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { App_context } from '../context';
import { useNavigate } from 'react-router-dom';
import { TbCategoryFilled } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";


function Navbar() {

    const { opn_menu, setopn_menu, menu_toogle, logout } = useContext(App_context)
    const active_user = sessionStorage.getItem("active_user") ? JSON.parse(sessionStorage.getItem("active_user")) : null
    const navigate = useNavigate()

    return (

        <div className='w-full h-[70px] back fixed top-0 left-0 z-30 db_shade flex justify-between pl-5 pr-10 items-center ' onClick={() => setopn_menu("")} >
            <div className='w-max h-full text-white font-bold text-4xl flex justify-center items-center '>AD_Products</div>
            {
                active_user ? (
                    <ul className='flex justify-center items-center gap-6 '>
                        <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} onClick={(e) => { menu_toogle("product"), e.stopPropagation() }} >products <FaAngleUp className={`text-white text-md transition-all duration-200 ease-in-out ${opn_menu == "product" ? "rotate-0" : "rotate-180"} `} />
                            <div className={`absolute z-20 top-[130%] rounded-lg transition-all duration-350 ease-in-out ${opn_menu == "product" ? " visible opacity-100 translate-y-0 " : " translate-y-10 invisible opacity-0 "} -left-3 w-[180px] h-max p-3 bg-white gx_sh `} onClick={(e) => e.stopPropagation()}>
                                <div className='w-full border-b-1 text-black/60 flex justify-between font-normal items-center border-black/20 h-[50px]  '>Category 1 <TbCategoryFilled /> </div>
                                <div className='w-full border-b-1 text-black/60 flex justify-between font-normal items-center border-black/20 h-[50px]  '>Category 2 <TbCategoryFilled /> </div>
                                <div className='w-full text-black/60 flex justify-between items-center font-normal border-black/20 h-[50px]  '>Category 3 <TbCategoryFilled /></div>
                            </div>
                        </li>
                        <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} onClick={(e) => { menu_toogle("order"), e.stopPropagation() }} >my order <FaAngleUp className={`text-white text-md transition-all duration-200 ease-in-out ${opn_menu == "order" ? "rotate-0" : "rotate-180"} `} />
                            <div className={`absolute z-20 top-[130%] rounded-lg transition-all duration-350 ease-in-out ${opn_menu == "order" ? " visible opacity-100 translate-y-0 " : " translate-y-10 invisible opacity-0 "} -left-3 w-[230px] h-[300px] bg-white gx_sh `} onClick={(e) => e.stopPropagation()}></div>
                        </li>
                        <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} onClick={(e) => { menu_toogle("user"), e.stopPropagation() }} > {active_user ? active_user : "user"} <FaAngleUp className={` text-white text-md transition-all duration-200 ease-in-out ${opn_menu == "user" ? "rotate-0" : "rotate-180"}`} />
                            <div className={`absolute z-20 top-[130%] rounded-lg transition-all duration-350 ease-in-out ${opn_menu == "user" ? " visible opacity-100 translate-y-0 " : " translate-y-10 invisible opacity-0 "} -left-3 w-[200px] h-max p-3 bg-white gx_sh `} onClick={(e) => e.stopPropagation()} >
                                <div className='w-full h-[40px] flex justify-between items-center border-b-1 border-black/20 font-normal text-black/50 ' >Products <MdProductionQuantityLimits className='text-green-500 text-2xl' /></div>
                                <div className='w-full h-[40px] flex justify-between items-center border-b-1 border-black/20 font-normal text-black/50 ' >MY Orders <FaJediOrder className='text-2xl text-black' /></div>
                                <div className='w-full h-[40px] flex justify-between items-center border-b-1 border-black/20 font-normal text-black/50 ' >Admin <FaCrown className='text-yellow-500 text-2xl' /></div>
                                <div className='w-full h-[40px] flex justify-between items-center text-black/50 font-normal ' onClick={logout} >LogOut <TbLogout2 className='text-red-500 text-2xl' /></div>
                            </div>
                        </li>
                        <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} ><MdShoppingCart className='text-white text-lg' /> cart  <div className='w-[25px] h-[25px] rounded-full bg-green-500 text-[14px] top-[-10px] left-1 animate-pulse absolute scale-80 p-0 m-0 flex justify-center opacity-80 items-center text-white '>0</div> </li>
                        <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} ><FaHeart className='text-white text-md' /> wishlist  <div className='w-[25px] h-[25px] rounded-full bg-red-500 text-[14px] top-[-10px] left-1 animate-pulse absolute scale-80 p-0 m-0 flex justify-center items-center opacity-80 text-white delay-400 '>0</div> </li>
                    </ul>

                ) : (
                    <div className='flex justify-center items-center gap-5'>
                        <button className=' py-1 px-3 rounded-lg bg-black text-white font-bold tw_sh tracking-[1px] bx_sh cursor-pointer transition-all ease-out duration-200 hover:scale-105 active:scale-100 ' onClick={() => navigate("/login")} >Login</button>
                        <button className=' py-1 px-3 rounded-lg bg-white text-black font-bold tb_sh tracking-[1px] wx_sh cursor-pointer transition-all ease-out duration-200 hover:scale-105 active:scale-100 ' onClick={() => navigate("/sign_up")} >Sign Up</button>
                    </div>
                )
            }



        </div>

    )
}

export default Navbar
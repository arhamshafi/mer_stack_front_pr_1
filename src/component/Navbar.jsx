import React, { useContext } from 'react'
import { FaAngleUp } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { App_context } from '../context';
{/* <FaCrown /> */ }
function Navbar() {
    const { opn_menu, setopn_menu, menu_toogle } = useContext(App_context)

    return (

        <div className='w-full h-[70px] back flex justify-between pl-5 pr-10 items-center ' onClick={() => setopn_menu("")} >
            <div className='w-[200px] h-full border border-white'></div>
            <ul className='flex justify-center items-center gap-6 '>
                <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} onClick={(e) => { menu_toogle("product"), e.stopPropagation() }} >products <FaAngleUp className={`text-white text-md transition-all duration-200 ease-in-out ${opn_menu == "product" ? "rotate-0" : "rotate-180"} `} />
                    <div className={`absolute top-[130%] rounded-lg transition-all duration-350 ease-in-out ${opn_menu == "product" ? " visible opacity-100 translate-y-0 " : " translate-y-10 invisible opacity-0 "} -left-3 w-[230px] h-[300px] bg-white gx_sh `} onClick={(e) => e.stopPropagation()}></div>
                </li>
                <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} onClick={(e) => { menu_toogle("order"), e.stopPropagation() }} >my order <FaAngleUp className={`text-white text-md transition-all duration-200 ease-in-out ${opn_menu == "order" ? "rotate-0" : "rotate-180"} `} />
                    <div className={`absolute top-[130%] rounded-lg transition-all duration-350 ease-in-out ${opn_menu == "order" ? " visible opacity-100 translate-y-0 " : " translate-y-10 invisible opacity-0 "} -left-3 w-[230px] h-[300px] bg-white gx_sh `} onClick={(e) => e.stopPropagation()}></div>
                </li>
                <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} onClick={(e) => { menu_toogle("user"), e.stopPropagation() }} > Arham Shafi <FaAngleUp className={` text-white text-md transition-all duration-200 ease-in-out ${opn_menu == "user" ? "rotate-0" : "rotate-180"}`} />
                    <div className={`absolute top-[130%] rounded-lg transition-all duration-350 ease-in-out ${opn_menu == "user" ? " visible opacity-100 translate-y-0 " : " translate-y-10 invisible opacity-0 "} -left-3 w-[230px] h-[300px] bg-white gx_sh `} onClick={(e) => e.stopPropagation()} ></div>
                </li>
                <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} ><MdShoppingCart className='text-white text-lg' /> cart <div className=' absolute -top-2.5 left-1 bg-green-500 rounded-full scale-70 px-[4px] '>0</div> </li>
                <li className={`text-white font-bold flex justify-center capitalize text-lg tracking-[1px] cursor-pointer items-center relative gap-1  `} ><FaHeart className='text-white text-md' /> wishlist <div className=' absolute -top-2.5 left-1 bg-red-500 rounded-full scale-70 px-[4px] '>0</div> </li>
            </ul>
        </div>

    )
}

export default Navbar
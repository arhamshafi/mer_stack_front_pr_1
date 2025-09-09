import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { App_context } from '../context';
import { MdGridView } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

function Dashboard() {

  const { setopn_menu, Grid_Dis, setGrid_Dis, filter_prd, set_filter_prd} = useContext(App_context)
  const navigate = useNavigate()

  

 


  return (
    <div className='w-full min-h-screen' onClick={() => setopn_menu("")}>
      <Navbar />
      <div className='w-full min-h-screen flex flex-wrap bg-[whiteSmoke]  '>
        <div className='w-[20%] min-h-screen bg-white mt-[70px]'>
          <div className='w-full h-[50px] p-3'>
            <p className='text-black text-2xl font-bold flex items-center tb_sh gap-3'> <IoFilter className='text-pink-500' />Filters</p>
            <div className='relative h-max'>
              <input type="text" placeholder='Search' className='pl-3 pr-7 border-1 border-black/30 rounded-xl  text-md mt-5 text-black placeholder:text-black/40 placeholder:font-bold w-full h-[40px] focus:outline-cyan-400 ' />
              <IoSearch className='absolute top-[52.5%] z-10 cursor-text right-2 text-pink-500 ' />
            </div>
            <p className='text-black text-2xl font-bold flex mt-5 items-center tb_sh gap-3'> <BiCategoryAlt className='text-cyan-500' />Category</p>
            <ul className='flex items-center gap-3 w-full h-max mt-5 flex-wrap'>
              {
                [ "all","computer", "Gaming Furniture", "groceries", "electronics", "fragrances", "furniture", "fitness", "kitchen", "footwear", "beauty",
                  "supplements", "lifestyle", "health", "home decor", "travel", "books", "accessories", "home"].map((cat, i) => {
                    return (
                      <li key={i} className={`text-sm py-[2px] px-1 rounded-lg bg-black/10 gx_sh text-black capitalize `} >{cat}</li>
                  )
                  })
              }
            </ul>

            {/* category */}
            {/* brand */}
            {/* prices low to high high to low  */}

            {/* logic here to process filteration */}
            {/* const handleFilter = (category) => {
  if (category === "all") {
    set_filter_prd(products);
  } else {
    set_filter_prd(products.filter(item => item.category === category));
  }
}; */}




          </div>
        </div>
        {/*   */}
        {/* ================SIDE BAR ========================== SIDE BAR ===================== */}
        <div className='w-[80%] h-full mt-[70px] '>

          <div className='w-full mt-5 px-5 flex justify-between items-center'>
            <p className='text-black/50 text-xl  '>We Have Stock Of <span className='text-black font-bold'>{filter_prd?.length}</span> Products </p>
            <div className='w-max h-[30px] flex justify-center gap-1 items-center  '>
              <div className={`w-[25px] h-[20px] border border-black/40 ${!Grid_Dis ? "text-black/40" : "text-black bg-black/5"} rounded-tl-xl rounded-bl-xl shadow-sm text-[15px] cursor-pointer flex justify-center pl-[4px] pb-[1px] items-center`} onClick={() => setGrid_Dis(true)} ><MdGridView /></div>
              <div className={`w-[25px] h-[20px] border border-black/40 ${Grid_Dis ? "text-black/40 " : "text-black  bg-black/5"} rounded-tr-xl rounded-br-xl shadow-sm text-[12px] cursor-pointer flex justify-center items-center `} onClick={() => setGrid_Dis(false)}><FaList /></div>
            </div>
          </div>

          <div className='w-full max-h-[85vh] relative overflow-y-auto  py-7 px-5 flex  items-center justify-evenly flex-wrap '>
            {/* /////////////////////////////////// CARD  */}
            {/* <div className='w-full h-[70px] bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 '></div> */}
            {
              filter_prd && filter_prd.length == 0 ? (<p className='text-black/60 font-bold text-2xl mt-40'>No Product Found </p>) : (
                filter_prd.map((ele, idx) => {
                  return (
                    <div key={idx} className='w-[280px] mt-5 h-max bg-white pt-3 pb-5 px-3 gx_sh group rounded-xl relative '>
                      <div className='w-[30px] h-[30px] rounded-full absolute top-3 right-2.5 bg-white gx_sh cursor-pointer z-10 transition-all ease-in duration-200 hover:scale-105 text-black hover:text-red-500 active:scale-100 flex justify-center items-center '> <FaRegHeart /> </div>
                      <div className='w-[30px] h-[30px] rounded-full absolute top-13 right-2.5 bg-white gx_sh cursor-pointer z-10 transition-all ease-in duration-200 hover:scale-105 text-black hover:text-blue-500 active:scale-100 flex justify-center translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 items-center' onClick={() => { navigate("/eye"), sessionStorage.setItem("eye_prd", JSON.stringify(ele)) }} > <FiEye /> </div>
                      <div className='w-full h-[150px] overflow-hidden ' onClick={() => { navigate("/eye"), sessionStorage.setItem("eye_prd", JSON.stringify(ele)) }}> <img className='w-full object-contain h-full group-hover:scale-110 transition-all duration-300 ease-in-out ' src={ele.image} alt="" />  </div>
                      <div className='w-full h-max mt-2 flex justify-between items-center '>
                        <div className=' px-2 rounded-sm text-pink-600 bg-pink-600/20 tracking-[1px] capitalize '>{ele.brand}</div>
                        <div className='w-max flex justify-center items-center gap-1'><FaStar className='text-yellow-400 text-md' /> <p className='text-[15px] text-black/60 '>4.8 (128)</p> </div>
                      </div>
                      <h1 className='mt-2 text-black text-lg font-bold tb_sh '>{ele.name}</h1>
                      <p className='text-[13px] text-black/50 mt-2'>{ele.description}</p>
                      <p className='text-3xl mt-2 text-green-400 font-bold'> $ {ele.discountedPrice} <span className='line-through text-lg -mt-4 text-black/40 font-normal '>$ {ele.price}</span> </p>
                      <div className='w-full h-[50px] flex mt-3 gap-2 '>
                        <button className='py-1 px-8 rounded-md db_shade cursor-pointer hover:scale-102 transition-all duration-200 ease-in-out active:scale-100 text-white font-bold text-xl back'>ADD TO CART</button>
                        <button className='py-1 px-3 text-2xl bg-black/10 rounded-lg gx_sh cursor-pointer hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out '><FaCartShopping /></button>
                      </div>
                    </div>
                  )
                }))
            }

            {/* /////////////////////////// DESIGN */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
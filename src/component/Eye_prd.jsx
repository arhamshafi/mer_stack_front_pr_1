import React, { useContext, useState } from 'react'
import Navbar from './Navbar';
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";

function Eye_prd() {

  const eye_prd = sessionStorage.getItem("eye_prd") ? JSON.parse(sessionStorage.getItem("eye_prd")) : null
  const navigate = useNavigate()
  const [img_idx, set_img_idx] = useState(0)

  return (
    <div className='w-full min-h-screen bg-black/10 px-5 py-[70px]  '>
      <Navbar />
      <div className='w-max mt-5 capitalize flex gap-1 text-black/60 items-center gt_sh '> <p className='cursor-pointer ' onClick={() => { navigate("/"), sessionStorage.removeItem("eye_prd") }} >home </p><FaChevronRight className='text-sm' /> {eye_prd?.category} <FaChevronRight className='text-sm  text-black' /> <p className='text-black tb_sh '>{eye_prd?.name}</p> </div>
      <div className='w-[85%] h-[500px] p-4 bg-white rounded-xl mx-auto mt-6 gx_sh flex gap-5 ' >
        {/* PART _one */}
        <div className='w-[40%] h-full flex  justify-center items-center flex-col '>
          <div className='w-full h-[60%] rounded-xl overflow-hidden bg-black/10 gx_sh relative  '><img src={eye_prd?.images[img_idx]?.url} className='w-full h-full object-contain  ' alt="" /></div>
          <div className='w-full h-max mt-5 flex gap-2 flex-wrap'>

            {eye_prd.images.map((img, i) => {
              return (
                <div key={i} className='w-[23%] h-[70px] group bx_sh rounded-lg overflow-hidden ' onClick={() => set_img_idx(i)} ><img src={img.url} className='w-full h-full group-hover:scale-115  transition-all duration-300 ease-in-out object-cover' alt="" /></div>
              )
            })}
          </div>
        </div>
        {/* PART _two */}
        <div className='w-[57%] h-full px-5 '>
          <h1 className='font-bold text-black tb_sh text-3xl mt-10 '>{eye_prd?.name}</h1>
          <div className='w-full mt-5 flex items-center capitalize gap-1 '> <FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' /><FaStar className='text-black/30' /> <p className='ml-2 text-md text-black/50'>(0 reviews)</p> <p className='text-green-600 text-sm ml-4'>in stock ({eye_prd?.stock})</p> </div>
          <p className='text-2xl tg_sh font-bold mt-5 text-green-500 '>$ {eye_prd?.discountedPrice} <span className='text-black/30 text-sm line-through ml-1 ' style={{ textShadow: "none" }} >$ {eye_prd?.price} </span> <span className='w-max px-2 py-[3px] rounded-sm text-[13px] ml-5 font-normal bg-red-500/20 rx_sh text-red-600 ' style={{ textShadow: "none" }} >OFF {eye_prd?.discount}% </span>  </p>
          <p className='text-black/80 mt-5 text-lg font-normal  '>{eye_prd?.description}</p>
          <p className='flex items-center text-black/60 tracking-[1px] text-sm gap-2 mt-3'> <FaClockRotateLeft /> Return in 30 days</p>
          <ul className='flex gap-5 mt-5 items-center flex-wrap'>
            {eye_prd?.tags?.map((ele, idx) => {
              return (
                <li key={idx} className='py-0 px-2 bg-cyan-500/20 capitalize cx_sh text-cyan-600 rounded-sm  '> {ele} </li>
              )
            })}
          </ul>
          <div className='w-full flex items-center gap-3 h-max mt-7 '>
            <button className='w-[60%] cursor-pointer hover:scale-102 transition-all duration-200 ease-in-out py-2 rounded-md back text-white db_shade text-xl font-bold tracking-[1px] active:scale-100 '> 🛒 Add To Cart </button>
            <div className='w-[45px] inner_sh h-[45px] rounded-lg flex justify-center items-center text-xl hover:text-lg transition-all duration-200 ease-in-out cursor-pointer  text-red-500 bg-black/10  '> <FaHeart /> </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eye_prd
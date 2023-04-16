import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Liked = () => {
  const navigate = useNavigate();
  return (
    <section className='container'>
    <div className="liked flex justify-center w-full h-screen">
       <div className="liked-wrapper w-[50%] h-full flex flex-col items-center justify-center gap-y-4">
       <span className='text-center'>
                <h2 className='text-[30px] font-medium text-[#101010] font-sans'>Упс пусто</h2>
                <p className='text-[20px] text-[#838383]'>Но это никогда не поздно исправить :)</p>
            </span>
            <button className='w-[100%] h-[65px] text-white text-center bg-[#101010] rounded-[20px] font-semibold text-[17px]' onClick={() => navigate('/')} style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)'}}>В каталог товаров</button>
       </div>
    </div>
</section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
export const Footer = () => {
  return (
    <footer>
       <div className="container">
       <div className="foot flex w-full text-[#333] bg-[#FFFFFF] p-5 justify-between px-7" style={{borderRadius: '30px 30px 0px 0px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
           <Link to='/'> <img src={logo} alt="" /></Link>
            <ul className='flex flex-col gap-y-2'>
               <li> <Link to='/liked'>Избранное</Link></li>
                <li> <Link to='/cart'>Корзина</Link></li>
                <li> <Link to='/contacts'>Контакты</Link></li>
            </ul>
            <div className='flex flex-col justify-around'>
                <Link to='/service-requirement'>Условия сервиса</Link>
               <select>
            
                <option value="KAZ">Kaz</option>
                <option value="RUS">Рус</option>
                <option value="ENG">Eng</option>
               </select>
            </div>
            <ul className='flex gap-4 text-[27px] w-[15%]'>
                <li><Link to='/'><i class='bx bxl-vk'></i></Link></li>
                <li><Link to='/'><i class='bx bxl-instagram'></i></Link></li>
                <li><Link to='/'><i class='bx bxl-telegram' ></i></Link></li>
                <li><Link to='/'><i class='bx bx-phone-call'></i></Link></li>
            </ul>
        </div>
       </div>
    </footer>
  )
}

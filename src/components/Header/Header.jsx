import React, { useEffect, useState, } from 'react'
import logo from '../../assets/logo.svg'
import { api } from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export const Header = () => {
    const [data, setData] = useState();
    useEffect(() => {
        api.getCategories().then(data => setData(data.data))
    }, [])
    const navigate = useNavigate();

    const liked = useSelector(state => state?.liked);    
    const saved = useSelector(state => state?.saved);
    const dispatch = useDispatch()
    const setCategory = (evt) => {
      evt.target.value == 'All' ? api.getAllProducts().then(data => dispatch({type: 'RENDER DATA', payload: data.data})) :
      api.getOneCategory(evt.target.value).then(data => dispatch({type: 'RENDER BY CATEGORY', payload: data.data}))
    }
  return (
    <header>
       <div className="site-header container p-4">
       <div className="flex justify-between items-center w-full">
     <div className="header-right w-[30%] flex justify-between items-center">
     <div className="logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
        <select className="header-select border border-spacing-1 p-2 focus:ring-2 rounded-[10px]" onChange={(evt) => {
        setCategory(evt)
        }}>
            <option defaultValue={'Categories'} disabled selected>Categories</option>
            <option defaultValue={'All'}>All</option>
          {
              data?.length ? data?.map(item => {
              return  <option value={item} className=''>{item}</option>
              }) : 'error' 
          }
        </select>
     </div>
     <div className="header-left flex justify-between w-[12%]">
        <span className='w-[50%] relative pt-3'><button className='bx bx-heart text-[25px]' onClick={() => navigate('/liked')}></button>
        <span className='w-[20px] h-[20px] rounded-[50%] bg-[#FFA542] text-white absolute top-0 right-8 flex justify-center pt-3 p-3 items-center'>{
            liked > 0 ? liked : 0
        }</span>
        </span>
        <span className='w-[50%] relative pt-3'><button onClick={() => {
          navigate('/cart')
        }} className='bx bx-cart text-[25px]'></button>
        <span className='w-[20px] h-[20px] rounded-[50%] bg-[#FFA542] text-white absolute top-0 right-8 flex justify-center p-3 items-center'>
            {
                 saved > 0 ? saved : 0
            }
        </span>
        </span>
     </div>
       </div>
       </div>
    </header>
  )
}

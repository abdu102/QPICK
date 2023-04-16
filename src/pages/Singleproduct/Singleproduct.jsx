import React, { useEffect, useState } from 'react'
import { api } from '../../api/api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Loader } from '../../ui/Loader/Loader';

export const Singleproduct = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [ saved, setSaved ] = useState(false)
    const [cart, setCart] = useState([])
    useEffect(() => {
        api.getSingleProduct(id).then(res => setData(res.data))
    }, [])
    const dispatch = useDispatch();
    // const addToCart = () => {

    // }
  return (
 <section className="container">
      <div className="product w-full h-[700px] flex flex-col gap-y-12">
    <div className="product__img rounded-[30px] p-2 w-full h-[50%] bg-[#FFFFFF] flex justify-center">
        <img src={data?.image} alt="" className='h-[100%]'/>
    </div>
    <div className="product__body w-full h-[43%] flex  relative">
     <div className=" w-[65%] h-[100%] flex flex-col relative">
     <div className="product__body--title w-full bg-[#FFFFFF] rounded-[15px] h-[15%] p-3 z-2" style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
            <h4 className='text-[#1C1C27] text-[20px] font-semibold'>Описание и характеристики</h4>
           
        </div>
        <div className='w-full h-[75%] z-[-1] bg-[#F9F9F9] rounded-[15px] p-4 pt-11 absolute top-4' style={{boxShadow: ' 0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
            <p>{data?.description}</p>
        </div>
     </div>
     <div className="product__buy w-[35%] h-[100%] flex flex-col items-center gap-7">
        <button onClick={() => {
            navigate(`/ordering/product/${id}`)
        }} className='w-[40%] h-[47px] text-white text-center text-[15px] font-medium bg-[#101010] rounded-[10px]' style={{boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)'}}>Купить!</button>
        <button onClick={() => {
            setSaved(saved ? false : true)
            dispatch({type: saved ? 'REMOVE SAVED' : 'ADD SAVED'})
            setCart(...cart, id)
            console.log(cart);
        }} className='w-[40%] h-[47px] text-white text-center text-[15px] font-medium bg-[#101010] rounded-[10px]' style={{boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)'}}>{saved ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
     </div>
    </div>
   </div>
 </section>
  )
}

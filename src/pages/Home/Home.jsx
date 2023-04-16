import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import slider__img from '../../assets/slider__img.jpg'
import { api } from '../../api/api';
import { Card } from '../../components/Card/Card';
import { Loader } from '../../ui/Loader/Loader'
export const Home = () => {
    // const liked = useSelector(state => state?.liked);
    const dispatch = useDispatch();
    // const [data, setData] = useState();
    const data = useSelector(state => state?.data);
    useEffect(() => {
        api.getAllProducts().then(data => dispatch({type: 'RENDER DATA', payload: data.data}))
    }, [])

    
  return (
    <section className='container'>
        <div className="home flex flex-col justify-between items-center">
            <div className="home__image">
                <img src={slider__img} alt="" />
            </div>
            <div className="home__cards flex gap-6  flex-wrap gap-y-[30px] px-7 justify-center xl:justify-start h-auto p-6">
                {
                    data?.length ? data?.map((item) => [
                        <Card item={item} key={item.id}/>
                    ]) : <Loader/>
                }
                
            </div>
        </div>
    </section>
  )
}

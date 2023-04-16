import React from 'react'
import { Form } from '../../ui/Form/Form';
import promokod from '../../assets/promokod.svg'
import visa from '../../assets/visa.svg'

export const Order = () => {
  // const { name, numberOfProduct, price } = localStorage.getItem('productOrder');
  const {name, price, numberOfProduct} = JSON.parse(localStorage.getItem('productOrder'));
  return (
    <section className='container'>
        <div className="order w-full h-[700px] flex justify-between items-center gap-4">
            <div className="order__adress h-[90%] p-4 w-[45%] rounded-[30px] bg-[#FFFFFF] " style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
                <div className="order__adress--title w-full h-[10%] flex justify-between items-center">
                  <h4 className='text-[#333] text-[17px] font-semibold'>Доставка курьером</h4>
                  <p className='text-[#333] text-[16px] font-medium'> 499 som</p>
                </div>
                <div className="order__adress--map w-full h-[35%]">
                <iframe className='w-full h-full rounded-[20px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8809.797986563433!2d69.24397143211563!3d41.307314761538336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf3870c714d%3A0x6ddece20c220333b!2z0J_QsNGA0Log0YDQsNC30LLQu9C10YfQtdC90LjQuSAiTWFnaWMgQ2l0eSI!5e0!3m2!1sru!2s!4v1681471019514!5m2!1sru!2s" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Form/>
            </div>
            <div className="order__info h-[90%] px-4 w-[45%] flex flex-col gap-y-8">
              <div className="order__cost w-full h-[30%] rounded-[30px] bg-[#FFFFFF] p-3 px-4" style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
                <h3 className='w-full text-[#333] text-[20px] font-semibold font-sans'>Ваш заказ</h3>
                <ul className='w-full h-[93%] px-2 flex flex-col gap-y-4 py-4'>
                  <li className='flex w-[95%] justify-between'>
                    <p className='text-[16px] text-[#333] font-semibold'>{numberOfProduct}x</p>
                    <h4 className='text-[14px] text-[#333] font-semibold'>{name}</h4>
                    <p className='text-[16px] text-[#333] font-semibold'>{price} som</p>
                  </li>
                  <li className='flex w-[95%] justify-between pl-[59px]'>
                  <h4 className='text-[16px] text-[#333] font-semibold'>Доставка</h4>
                    <p className='text-[16px] text-[#333] font-semibold'>{price} som</p>
                  </li>
                  <li className='flex w-[95%] justify-between pl-[59px]'>
                  <h4 className='text-[16px] text-[#333] font-semibold'>К оплате</h4>
                    <p className='text-[16px] text-[#333] font-semibold'>{price} som</p>
                  </li>
                </ul>
              </div>
              <div className="order__payment w-full h-[25%] flex flex-col gap-y-3 rounded-[30px] bg-[#FFFFFF] p-3 px-4" style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
                <h3 className='text-[22px] text-[#333] font-semibold'>Способ оплаты</h3>
                <ul className='flex flex-col gap-y-3'>
                  <li className='flex gap-x-3 items-center justify-between'>
                <span className='flex gap-x-3'>
                <img src={visa} alt="visa" />
                  <p className='text-[16px] font-semibold text-[#333]'>Счет на kaspi.kz</p>
                </span>
              <button><i class='bx bxs-chevron-down text-[24px]' ></i></button>
                  </li>
                  <li className='flex gap-x-3 pl-1 items-center justify-between'>
                    <span className='flex gap-x-3'>
                    <img src={promokod} alt="promokod" />
                    <p className='text-[#838383] text-[16px] font-medium'>Есть промокод?</p>
                    </span>
                    <button><i class='bx bxs-chevron-right text-[20px] text-[#838383]'></i></button>
                  </li>
                </ul>
              </div>
              <div className="order__phoneNumber w-full h-[20%] flex flex-col gap-y-3 rounded-[30px] bg-[#FFFFFF] p-3 px-4" style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
                <h3 className='text-[17px] text-[#333] font-semibold'>Номер получателя</h3>
        <input type="number" id="phoneNumber" className="border border-gray-300 text-sm rounded-[15px] w-[95%] focus:ring-blue-500 placeholder:text-[#8E8E8E] text-[#8E8E8E] focus:border-blue-500 block h-[45px] p-3 bg-[#D6D6D6] outline-none" placeholder="+7 ___ ___ __ __" required/>

              </div>
              <button className='w-full h-[45px] bg-[#101010] text-[#FFFFFF] text-[15px] rounded-[10px]' style={{boxShadow: ' 0px 0px 20px rgba(67, 216, 84, 0.25)'}}>Закончить оформление</button>
            </div>
        </div>
    </section>
  )
}

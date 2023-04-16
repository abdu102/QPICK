import React from 'react'
import contact_map from '../../assets/contact-map.jpg';
import location from '../../assets/location.svg';
export const Contact = () => {
  return (
    <section className='container'>
        <div className="contact w-full h-[680px] flex flex-wrap p-4 justify-between">
                <div className="contact-map flex flex-col w-[75%] h-[80%]  justify-between rounded-[30px] bg-[#FFFFFF] p-4" style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}>
                    <h3 className='font-sans text-[#1C1C27] text-[21px] font-semibold'>Наш офис</h3>
                    <img src={contact_map} alt="" className='w-full h-[75%]'/>
                    <div className="contact-adress w-full flex items-center h-[10%] p-4 gap-x-3">
                    {/* <i className='bx bxs-edit-location text-[40px]'></i> */}
                    <img src={location} alt=""  className='w-[22px] h-[24px]'/>
                    <span className=''>
                        <h5 className='text-[#333] text-[17px] font-semibold'>Аксай-3а, 62ф, Алматы, Казахстан</h5>
                        <small className='text-[#838383]'>3 этаж 35 кабинет</small>
                    </span>
                    </div>
                </div>
                <ul className="contact-media w-[12%] h-[75%] flex flex-col justify-between ">
                    <li className='w-[70%] h-[20%] flex justify-center items-center rounded-[30px] bg-[#FFFFFF]' style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}><i class='text-[#1C1C27] text-[39px] bx bxl-whatsapp'></i></li>
                    <li className='w-[70%] h-[20%] flex justify-center items-center rounded-[30px] bg-[#FFFFFF]' style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}><i class='text-[#1C1C27] text-[39px] bx bxl-vk'></i></li>
                    <li className='w-[70%] h-[20%] flex justify-center items-center rounded-[30px] bg-[#FFFFFF]' style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}><i class='text-[#1C1C27] text-[39px] bx bxl-instagram' ></i></li>
                    <li className='w-[70%] h-[20%] flex justify-center items-center rounded-[30px] bg-[#FFFFFF]' style={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}}><i class='text-[#1C1C27] text-[39px] bx bxl-telegram' ></i></li>
                </ul>
                <div className="contact-phone w-full flex gap-x-4 items-center">
                <i class='bx bxs-phone-call text-[31px]' ></i>
                <h3 className='text-[25px] text-[#333] font-semibold'>+7 777 777 77 77</h3>
                </div>
        </div>
    </section>
  )
}

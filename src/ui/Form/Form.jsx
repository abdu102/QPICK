import React from "react";
import location from "../../assets/location.svg";
export const Form = () => {
  return (
    <div className="order__form w-full h-[60%] p-3 gap-y-8 flex flex-col justify-between">
      <span className="flex w-full h-[4%] gap-3">
        <img src={location} alt="location" className="w-[20px] h-[22px]" />
        <h4 className="text-[#333] text-[17px] font-semibold">
          Адрес доставки
        </h4>
      </span>
      <form className="w-full h-[90%] flex flex-col gap-y-4">
        <select className="w-[92%] bg-[#D6D6D6] p-3 rounded-[15px] focus:ring-2 outline-0">
          <option value="Бухара">Бухара</option>
          <option value="Хива">Хива</option>
          <option value="Навои">Навои</option>
          <option value="Коканд">Коканд</option>
          <option value="Ташкент">Ташкент</option>
          <option value=" Андижан">Андижан</option>
          <option value=" Термез">Термез</option>
          <option value=" Самарканд">Самарканд</option>
          <option value="Наманган"> Наманган</option>
          <option value="Фергана">Фергана</option>
          <option value="Ургенч">Ургенч</option>
        </select>
        <span>
        <input type="text" id="street__name" className="border border-gray-300 text-sm rounded-[15px] focus:ring-blue-500 placeholder:text-[#8E8E8E] text-[#8E8E8E] focus:border-blue-500 block w-[92%] h-[45px] p-3 bg-[#D6D6D6] outline-none" placeholder="Улица / Район" required/>
        </span>
        <span className="w-full flex flex-wrap gap-5">
        <input type="text" id="house" className="border border-gray-300 text-sm rounded-[15px] w-[44%] focus:ring-blue-500 placeholder:text-[#8E8E8E] text-[#8E8E8E] focus:border-blue-500 block h-[45px] p-3 bg-[#D6D6D6] outline-none" placeholder="Дом" required/>
        <input type="text" id="entrance" className="border border-gray-300 text-sm rounded-[15px] w-[44%] focus:ring-blue-500 placeholder:text-[#8E8E8E] text-[#8E8E8E] focus:border-blue-500 block h-[45px] p-3 bg-[#D6D6D6] outline-none" placeholder="Подъезд" required/>
        <input type="text" id="flat" className="border border-gray-300 text-sm rounded-[15px] w-[44%] focus:ring-blue-500 placeholder:text-[#8E8E8E] text-[#8E8E8E] focus:border-blue-500 block h-[45px] p-3 bg-[#D6D6D6] outline-none" placeholder="Квартира" required/>

        </span>
      </form>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import map from "../../assets/map.jpg";
import { Loader } from "../../ui/Loader/Loader";
export const Ordering = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {

    api.getSingleProduct(id).then((res) => setData(res.data));

  }, []);
  const [totalProduct, setTotalProduct] = useState(1);
  const [sum, setSum] = useState();

  useEffect(() => {

    setSum(Math.trunc(data?.price) * (totalProduct === null ?  1 : totalProduct) )

  }, [totalProduct])
  const addToStorage = () => {
    const newProduct = {
      name: data?.title,
      numberOfProduct: totalProduct,
      price: totalProduct == 1 ? Math.trunc(data?.price) : sum
    }

    localStorage.setItem('productOrder', JSON.stringify(newProduct))
    navigate(`/order/product/${id}`)
  }
  const navigate = useNavigate();
  return (
    <section className="container">
      <div className="ordering flex justify-between min-h-[600px] p-3">
        <div className="ordering__body w-[55%] flex flex-col justify-between">
          <div
            className="ordering__body--count w-full flex justify-between h-[248px] p-3 rounded-[30px] bg-[#FFFFFF]"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="w-[70%] h-full flex justify-between items-center gap-x-3">
              <div className="w-[40%] p-2 h-full flex flex-col items-center justify-between">
                <img src={data?.image} alt="" className="w-[95%] h-[70%]" />
                <span className="flex gap-x-3 items-center">
                  <button
                    className="w-[35px] h-[35px] rounded-[50%] text-center text-white font-medium bg-[#FFCE7F]"
                    onClick={() =>
                      setTotalProduct(
                        totalProduct !== 1 ? totalProduct - 1 : totalProduct
                      )
                    }
                  >
                    -
                  </button>
                  <p>{totalProduct}</p>
                  <button
                    className="w-[35px] h-[35px] rounded-[50%] text-center text-white font-medium bg-[#FFCE7F]"
                    onClick={() => setTotalProduct(totalProduct + 1)}
                  >
                    +
                  </button>
                </span>
              </div>
              <span className="w-[70%] h-[80%] flex flex-col gap-4">
                <h3 className="text-[#1C1C27] text-[20px] ">{data?.title}</h3>
                <p className="text-[#AAAAAA] text-[15px]">
                  {Math.trunc(data?.price)} som
                </p>
              </span>
            </div>
            <div className="w-[15%] flex items-end">
              <p className="text-[#1C1C27] text-[17px] font-semibold">
                {Math.trunc(data?.price) * totalProduct} som
              </p>
            </div>
          </div>
          <div
            className="ordering__body--adress p-3 w-full pl-4 h-[300px] bg-[#FFFFFF] rounded-[30px] flex flex-col justify-between"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <span className="w-full h-[9%] pl-1 flex items-center">
              
              <h3 className="text-[#333] text-[20px] font-semibold">
                Доставка
              </h3>
            </span>
            <img src={map} alt="map" className="w-full h-[70%]" />
            <div className="w-full h-[12%] flex justify-between">
              <span className="flex justify-between gap-x-3 px-2 items-center">
                <i className="bx bxs-truck text-[23px] "></i>
                <p className="text-[16px] text-[#333] font-medium">
                  Доставка курьером
                </p>
              </span>
              <h4 className="text-[#1C1C27] text-[16px] font-semibold">
                {" "}
                499 som
              </h4>
            </div>
          </div>
        </div>
        <div
          className="ordering__buy flex flex-col justify-between w-[20%] h-[120px] bg-[#FFFFFF] rounded-[30px]"
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <span className="flex justify-between p-3 px-5">
            <p className="font-semibold text-[16px] text-[#333]">ИТОГО</p>
            <p className="font-semibold text-[16px] text-[#333]">
                {sum > 0 ? sum  : data?.price } som
            </p>
          </span>
          <button
          onClick={() => {
            addToStorage();
          }}
            className="w-full h-[50%] bg-[#101010] rounded-[20px] text-[17px] text-[#FFFFFF]"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)" }}
          >
            Перейти к оформлению
          </button>
        </div>
      </div>
    </section>
  );
};

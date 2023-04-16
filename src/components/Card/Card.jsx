import React, { useEffect, useState } from "react";
import star from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";
export const Card = ({
  item: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);
  
  return (
    <div
style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
      className="card w-[380px] min-h-[400px] max-h-[460px] bg-[#FFFFFF] rounded-[30px] p-5 relative flex flex-col justify-between items-center"
    >
      <span>
        <button
          className={`bx b${
            selected ? "xs" : "x"
          }-heart text-[25px] absolute top-4 left-4`}
          onClick={() => {
            setSelected(selected ? false : true);
            dispatch({ type: selected ? "REMOVE LIKED" : "ADD LIKED" });
            
              
          }}
        ></button>
      </span>
     <Link to={`/singleproduct/${id}`} className="h-[50%]"><img src={image} alt={title} className="w-[100%] h-[100%]" /></Link>
      <div className="card__body w-full h-[40%]">
        <span className="w-full p-3 flex justify-between">
          <h4 className="text-[17px] text-[#1C1C27]">{title}</h4>
          <p className="text-[17px] text-[#FFA542]">{price}</p>
        </span>
        <span className="flex items-center gap-2">
          <img src={star} alt="star" />
          <p className="text-[17px] text-[#838383]">{rate}</p>
        </span>
      </div>
    </div>
  );
  }
 
        

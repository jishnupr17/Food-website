import React from "react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const { name, image, category, price,loading,id  } = props; // Destructure props

  return (
    <div className="bg-white shadow p-2  rounded  min-w-[150px]">
      {name ? (
        <>
        <Link to={`/menu/${id}`}  onClick={()=>window.scrollTo({top:"o",behavior :"smooth"})}>
          <div className="h-36  min-h[150px]">
            <img src={image} alt={name} className="h-full w-full " />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-600 font-medium">{category}</p>
          <p className="text-center font-bold ">
            <span className="">₹</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
        
      )

      :
     <div className="flex justify-center items-center h-full">
       <p>{"Loading..."}</p>
     </div>
    
    
    }
    </div>
  );
};

export default HomeCard;

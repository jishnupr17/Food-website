import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";
addCartItem

const CardFeature = ({ image, name, price, category, loading, id }) => {

  const dispatch = useDispatch()



  const HandleAddCardProduct = (e)=>{
    
    dispatch(addCartItem({

      _id : id,
      name : name,
      price :price,
      category : category,
      image :image



    }))
    }


  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-2xl pb-5 pt-3 px-5 cursor-pointer">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "o", behavior: "smooth" })}
          >
            <div className=" h-28 flex flex-col justify-center items-center ">
              <img src={image} alt="" className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-600 font-medium">{category}</p>
            <p className=" font-bold ">
              <span className="">₹</span>
              <span>{price}</span>
            </p>
            </Link>
            <button className="bg-yellow-400 w-[160px] py-1 my-1 mt-3 rounded " onClick={HandleAddCardProduct}>
              Add Cart
            </button>
          
        </>
      ) : (
        <div className="min-h-[150px]  flex justify-center items-center">
          <p> {loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;

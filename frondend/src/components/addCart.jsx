import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartItem,IncreaseQty,DecreaseQty } from "../redux/productSlice";

const AddCart = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-300 p-2 flex  gap-4 rounded border-2 border-slate-200 ">
      <div className=" p-3 bg-white  rounded overflow-hidden">
        <img src={image} className="h-28 w-36 object-cover p-3 " />
      </div>
      <div className="flex flex-col gap-3 ml-0 md:ml-4 mt-3 w-full">
        <div className=" flex justify-between">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-2xl">
            {name}
          </h3>
          <div className="cursor-pointer ">
            <AiFillDelete
              className="size-5 text-black hover:text-red-500"
              onClick={() => {
                console.log("Deleting item ID:", id); // Debugging log
                if (!id) {
                  console.error("Error: ID is undefined!");
                  return;
                }
                dispatch(deleteCartItem(id));
              }}
            />
          </div>
        </div>
        <p className="text-slate-600 font-medium ">{category}</p>
        <p className="font-bold text-base">
          <span className="text-red-500">₹</span>
          <span>{price}</span>
        </p>
        <div className="flex justify-between ">
          <div className="flex gap-5 mt-3 items-center ">
            <button onClick={()=>dispatch(IncreaseQty(id))} className="bg-slate-400 w-[80px] py-2 rounded  text-white hover:bg-slate-500 transition">
              <FaCirclePlus className="m-auto"  />
            </button>
            <p className="font-semibold">{qty}</p>
            <button onClick={()=>dispatch(DecreaseQty(id))} className=" bg-slate-400 w-[80px] py-2 rounded  text-white  hover:bg-slate-500 transition">
              <FaMinusCircle className="m-auto" />
            </button>
          </div>
          <div className=" flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p> <span className="text-red-500 gap-1">₹</span>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;

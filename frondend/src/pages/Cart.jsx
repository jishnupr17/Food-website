import React from "react";
import { useSelector } from "react-redux";
import AddCart from "../components/addCart";

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem);
  console.log(productCartItems);

  const totalPrice = productCartItems.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalqty = productCartItems.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  return (
    <>
      <div>
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 p-2 md:p-4">
          Your Cart Items{" "}
        </h2>
        
        { productCartItems[0] ?
          <div className=" my-4 flex gap-5">
            {/* display the cart item */}
            <div className=" w-full max-w-4xl  ">
              {productCartItems.map((el) => {
                return (
                  <AddCart
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart item */}
            <div className=" w-full max-w-md bg-slate-300  ml-auto mr-8 my-3 h-[220px] p-5">
              <h2 className="bg-slate-400 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b  ">
                <p>Total Quantity</p>
                <p className="ml-auto w-32 font-bold">{totalqty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b  ">
                <p>Total Price </p>
                <p className="ml-auto w-32 font-bold">
                  {" "}
                  <span className="text-red-500 gap-2 ">₹</span>
                  {totalPrice}
                </p>
              </div>
              <button className=" bg-red-500 hover:bg-red-600 w-full text-lg font-bold py-2 rounded text-white ">
                Payment
              </button>
            </div>
          </div>
          :

          <>
          <div className="flex w-full justify-center items-center flex-col">
            <img className="w-full max-w-sm" src="https://krosfitsports.com/public/empty-cart.gif" alt="" />
            <p className="text-slate-500 text-3xl font-bold mt-4">Empty</p>
          </div>
         
          </>
        }
      </div>
    </>
  );
};

export default Cart;

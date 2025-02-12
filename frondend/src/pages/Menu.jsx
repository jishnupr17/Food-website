import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../components/AllProduct";
import { addCartItem } from "../redux/productSlice";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  console.log("Product Data:", productData);
  console.log("Filterby:", filterby);

  // Ensure productData is not empty before filtering
  if (!productData || productData.length === 0) {
    return <div className="text-center text-red-500 font-bold mt-10">Loading Products...</div>;
  }

  const productDisplay = productData.find((el) => el._id === filterby);

  // If no matching product is found
  if (!productDisplay) {
    return <div className="text-center text-red-500 font-bold mt-10">Product Not Found</div>;
  }

  const HandleAddCardProduct = () => {
    dispatch(addCartItem(productDisplay));
  };

  return (
    <div>
      <div className="w-[800px] bg-white m-auto flex flex-col md:flex-row p-5 rounded-lg shadow-md mt-10">
        {/* Product Image */}
        <div className="max-w-2xl p-5 flex justify-center">
          <img
            src={productDisplay.image}
            alt={productDisplay.name}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg hover:scale-105 transition-transform"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-3 ml-0 md:ml-4 mt-3">
          <h3 className="font-semibold text-slate-600 capitalize text-3xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-600 font-medium text-2xl">{productDisplay.category}</p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">₹</span>
            <span>{productDisplay.price}</span>
          </p>

          <div className="flex gap-5 mt-3">
            <button className="bg-green-500 w-[120px] py-2 rounded-lg text-white hover:bg-green-600 transition">
              Buy
            </button>
            <button
              className="bg-green-500 w-[120px] py-2 rounded-lg text-white hover:bg-green-600 transition"
              onClick={HandleAddCardProduct}
            >
              Add Cart
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start mt-3">
            <p className="text-slate-600 font-medium">Description:</p>
            <p className="ml-2 text-slate-700">{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;

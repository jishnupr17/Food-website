import React, { useRef } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import AllProduct from "../components/AllProduct";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const homeProductCardList = productData.slice(5, 10);
  const homeProductcardListVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );

  
  // console.log(homeProductcardListVegetables);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(15).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const PreviousProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4 ">
      <div className=" md:flex gap-4 py-2   ">
        <div className=" md:w-1/2 ">
          <div className=" flex gap-3 bg-slate-300 w-40 px-4 p-1 items-center rounded-full ">
            <p className="text-sm font-medium text-slate-900">Bike Devivery</p>
            <img 
              className=" h-6"
              src="https://png.pngtree.com/png-clipart/20220404/original/pngtree-big-isolated-motorcycle-vector-colorful-icons-set-flat-illustrations-of-various-png-image_7514346.png"
              alt=""
            />
          </div>
          <h2 className="text-4xl font-bold md:text-7xl py-3">
            The Fasted Delivery In{" "}
            <span className="text-red-500 ">Your Home</span>
          </h2>
          <p className="py-3 text-base ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quod
            maxime qui cumque, rem animi facere sequi sunt! Laboriosam cum hic
            eligendi reiciendis minima consequuntur ratione nam voluptatum.
            Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button  className="font-bold bg-red-400 hover:bg-green-500 text-slate-200 px-3 py-1 rounded-md  ">
            Order Now 
          </button>
        </div>
        <div className=" md:w-1/2 flex  flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex  w-full  items-center ">
          <h2 className="font-bold text-2xl text-slate-600 mb-5 ml-6 ">
            Fresh Vegetables
          </h2>

          <div className=" ml-auto flex gap-4">
            <button
              onClick={PreviousProduct}
              className=" bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="  bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-6 overflow-x-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductcardListVegetables.length > 0
            ? homeProductcardListVegetables.map((el) =>
                el ? (
                  <CardFeature
                    key={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                    id={el._id}
                  />
                ) : null
              )
            : loadingArrayFeature.map((el, index) => (
                <CardFeature key={index} loading="loading...." />
              ))}
        </div>
      </div >
      <AllProduct heading={"your products"} />
    </div>
  );
};

export default Home;

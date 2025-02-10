import React, { useEffect, useState } from "react";

import FilterProduct from "../components/FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);

  const CategotyList = [...new Set(productData.map((el) => el.category))];
  console.log(CategotyList);

  const [filterBy, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    if (filterBy) {
      setDataFilter(
        productData.filter((product) => product.category === filterBy)
      );
    } else {
      setDataFilter(productData);
    }
  }, [productData, filterBy]);

  // Handler to update filter
  const handleFilterProduct = (category) => {
    setFilterBy(category)
    setFilterBy(category);
  };
  const loadingArrayFeature = new Array(15).fill(null);

  return (
    <div>
      <div className="my-5">
        <h2 className="font-bold text-2xl text-slate-600 mb-5 ">{heading}</h2>

        <div className="flex gap-5 justify-center overflow-x-scroll scrollbar-none   ">
          {CategotyList[0] ? (
            CategotyList.map((el) => {
              return (
                <FilterProduct
                  category={el}
                  key={el}
                  isActive={el.toLowerCase() === filterBy.toLowerCase()}

                  onClick={() => handleFilterProduct(el)}
                />
              );
            })
          ) : (
            <div className="min-h-[150px]  flex justify-center items-center">
              <p> loading....</p>
            </div>
          )}
        </div>
        <div className=" flex flex-wrap justify-center gap-5 my-4">
          { dataFilter[0] ? dataFilter.map((el) => {
            return (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            );
          })
          :
          loadingArrayFeature.map((el, index) => (
                <CardFeature key={index} loading="loading...." />
              ))}
          
          
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

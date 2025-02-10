import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Newproduct from "./pages/Newproduct";
import Signup from "./pages/Signup";
import { setDataProduct } from "./redux/productSlice";
import Cart from "./pages/Cart";



const App = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  console.log(productData);
  

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/product`);
        const resData = await res.json();
        console.log(resData);
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      }
    })();
  }, [dispatch]);
  console.log(productData);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/menu" element={<Menu />} /> */}
            <Route path="/menu/:filterby" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newproduct" element={<Newproduct />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            
          
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;


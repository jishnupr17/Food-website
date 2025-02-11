import React from "react";
import loginSignupImage from "../assets/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(import.meta.env.https://food-website-backend-cecq.onrender.com);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${import.meta.env.https://food-website-backend-cecq.onrender.com}/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);


        // alert(dataRes.message);
        toast(dataRes.message)
        if(dataRes.alert){
          navigate("/login")
        }
      } else {
        alert("Password and confirm password do not match");
      }
    } else {
      alert("Please enter all required fields");
    }
  };



 
  
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <div className="w-full max-w-sm bg-white m-auto mb-10  flex-col p-4 rounded-md shadow-lg">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto  relative  ">
          <img
            src={loginSignupImage}
            alt="Login Animation"
            className=" w-full "
          />
          
        </div>
        <form className="w-full mt-4 py-3 flex flex-col " onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="">
            First Name
          </label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="w-full px-2 py-1 mt-1  bg-slate-200 rounded border focus:outline-none focus:ring-2  mb-3"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="w-full mt-1  bg-slate-200 px-2 py-1 rounded border focus:outline-none focus:ring-2 mb-3"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full px-2 mt-1 py-1  bg-slate-200 rounded border focus:outline-none focus:ring-2 mb-3"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex   mt-1 mb-2 ">
            <input
              type={"password"}
              id="password"
              name="password"
              className="w-full mt-1 bg-slate-200 px-2 py-1 border rounded  focus:outline-none focus:ring-2  "
              value={data.password}
              onChange={handleOnChange}
            />
          </div>
          <label htmlFor="Confirm password"> Confirm Password</label>
          <div className="flex  mb-2 mt-1">
            <input
              type={"password"}
              id="Confirm password"
              name="confirmPassword"
              className="w-full  bg-slate-200 px-2 py-1 border rounded  focus:outline-none focus:ring-2 "
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
          </div>

          <button className="max-w-[130px] w-full m-auto  rounded-full mt-2  bg-red-400 hover:bg-green-500 cursor-pointer text-white text-x font-medium text-center py-1 px-1 p-1">
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already Have Accound ?{" "}
          <Link to={"/login"} className="text-red-600"> 
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup; 

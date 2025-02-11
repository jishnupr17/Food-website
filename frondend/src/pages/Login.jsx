import React, { useState } from "react";
import loginSignupImage from "../assets/login-animation.gif";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {loginReducer} from "../redux/userSlice"

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const userData= useSelector(state => state)
    
    const dispatch = useDispatch()
    
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim spaces to avoid accidental issues
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.https://food-website-backend-cecq.onrender.com}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
      

      

      const dataRes = await response.json();
      console.log(loginReducer(dataRes));
      console.log(userData);
      
      toast(dataRes.message);

      if (dataRes.alert) {

        dispatch(loginReducer(dataRes))
        setTimeout(()=>{
          navigate("/");
        },2000)
      }

      console.log(userData);
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };


  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200 ">
      <div className="w-full max-w-sm bg-white m-auto mb-10  flex-col p-4 rounded-md shadow-lg mt-6 ">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto  ">
          <img
            src={loginSignupImage}
            alt="Login Animation"
            className=" w-full "
          />
        </div>
        <form
          className="w-full mt-2  py-3 flex flex-col "
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full px-2 mt-1 py-1  bg-slate-200 rounded border focus:outline-none focus:ring-2 "
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

          <button className="max-w-[130px] w-full m-auto  rounded-full mt-2  bg-red-400 hover:bg-green-500 cursor-pointer text-white text-x font-medium text-center py-1 px-1 p-1">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't Have Accound ?{" "}
          <Link to={"/signup"} className="text-red-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;




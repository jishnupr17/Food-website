import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = ({ cartCount }) => {
  const [showMenu, setshowMenu] = useState(false);
  const userdata = useSelector((state) => state.user);
  console.log(userdata.email);

  const HandleShowmenu = () => {
    setshowMenu((preve) => !preve);
  };

  const CartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <body>
      <header className="fixed shadow-md w-full h-20 px-2 md:px-4 z-50  bg-white">
        {/* Desktop */}
        <div className="flex items-center h-full justify-between   ">
          <NavLink to={""}>
            <div className="h-20 w-[150px] p-1">
              <img src="https://i.fbcd.co/products/original/3d29709d513da64d56f9dd53a4310f4d3584b2343b10f29d1ef27985437faf98.jpg" alt="Company Logo" className="h-full" />
            </div>
          </NavLink>

          <div className="flex items-center gap-10 md:gap-7">
            <nav className=" gap-3 md:gap-6 text-base md:text-lg hidden md:flex">
              <NavLink to={""} ClassName="text-blue-500 font-bold">
                Home
              </NavLink>
              <NavLink
                to={"menu/679e08e8633fa76b8150d51d"}
                ClassName="text-blue-500 font-bold"
              >
                Menu
              </NavLink>
              <NavLink to={"About"} ClassName="text-blue-500 font-bold">
                About
              </NavLink>
              <NavLink to={"Contact"} ClassName="text-blue-500 font-bold">
                Contact
              </NavLink>
            </nav>

            <div className="relative text-2xl text-slate-600 ">
              <Link to={"Cart"}>
                <IoIosCart />
                <div className="absolute top-0 right-0 text-white bg-red-500 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-6 ml-1">
                  {CartItemNumber.length}
                </div>{" "}
              </Link>
            </div>

            <div
              className="text-2x text-slate-600 cursor-pointer"
              onClick={HandleShowmenu}
            >
              <div className="border-2 border-solid border-slate-600 p-1 rounded-full">
                <FaUser />
              </div>

              {showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 drop-shadow-md mt-5 flex flex-col min-w-[120px] text-center">
                  {userdata.email === import.meta.env.VITE_ADMIN_EMAIL && (
                    <NavLink
                      to={"newproduct"}
                      className="whitespace-nowrap cursor-pointer"
                    >
                      New Product
                    </NavLink>
                  )}

                  <NavLink
                    to={"login"}
                    className=" whitespace-nowrap cursor-pointer bg-green-500 p-1 rounded mt-2"
                  >
                    Login <span>{userdata.firstName}</span>
                  </NavLink>

                  <nav className=" text-base md:text-lg flex flex-col md:hidden ">
                    <NavLink to={""} ClassName="px-2 py-1">
                      Home
                    </NavLink>
                    <NavLink
                      to={"menu/679e08e8633fa76b8150d51d"}
                      ClassName="px-2 py-1"
                    >
                      Menu
                    </NavLink>
                    <NavLink to={"About"} ClassName="px-2 py-1">
                      About
                    </NavLink>
                    <NavLink to={"Contact"} ClassName="px-2 py-1">
                      Contact
                    </NavLink>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile (to be implemented) */}
      </header>
    </body>
  );
};

export default Header;

import React from "react";
import logo from "../assets/icons/firstlogo.svg";
const Navbar = () => {
  return (
    <div className="w-100 h-[12vh] bg-primary  text-white">
      <div className="mx-8 flex justify-between items-center">
        <div className="text-xl sm:text-3xl font-semibold">FirstAccount</div>
        <img src={logo} className="h-[10vh]" alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;

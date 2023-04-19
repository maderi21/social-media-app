import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../assets/logo.png";

const Sidebar = (user, closeToggle) => {
  const handleCloseSider = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overlflow-y-scroll min-w-210 hide-scrollbar">
      <div className="felx flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 py-1 w-190 items-center"
          onClick={handleCloseSider}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

import react, { useState, useRef, UseEffect, useEffect } from "react";
import { HiMenu } from "react-icons/hi-menu";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { Sidebar, UserProfile } from "./components";
import Pins from "./Pins";
import { client } from "./client.js";
import logo from "../assets/logo.png";

import React from "react";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear;

  useEffect(() => {}, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out ">
      Home
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={logo} alt="logo" className="w-28" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

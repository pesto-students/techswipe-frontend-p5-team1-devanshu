import React from "react";
import { useNavigate } from "react-router-dom";
//
import Logo from "../assets/Logo.svg";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center p-2 px-4 flex-wrap bg-blue-500 md:h-16">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <div className="ml-2 text-center md:text-xl">TechSwipe</div>
      </div>
      {/* <div className="" onClick={() => navigate("/")}>
          </div> */}
      <div>
        <div onClick={handleLogout} className="block">
          logout
        </div>
      </div>
    </div>
  );
};

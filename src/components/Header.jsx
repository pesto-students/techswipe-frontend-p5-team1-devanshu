import React from "react";
//
import Logo from "../assets/Logo.svg";

export const Header = () => {
  const logout = "http://localhost:3030/auth/logout";

  return (
    <div className="flex justify-between items-center p-2 px-4 flex-wrap bg-blue-500">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <div className="ml-2 text-center md:text-xl">TechSwipe</div>
      </div>
      {/* <div className="" onClick={() => navigate("/")}>
          </div> */}
      <div>
        <a href={logout} className="block">
          logout
        </a>
      </div>
    </div>
  );
};

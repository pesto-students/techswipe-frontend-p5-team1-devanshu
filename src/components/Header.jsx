import React from "react";
//
import Logo from "../assets/Logo.svg";

export const Header = () => {
  const logout = "http://localhost:3030/auth/logout";

  return (
    <div className="flex justify-center items-center p-4 bg-blue-500">
      <img src={Logo} alt="logo" className="w-8 h-8" />
      <div className="ml-2 text-center text-2xl mr-20">TechSwipe</div>
      {/* <div className="" onClick={() => navigate("/")}>
          </div> */}
      <a href={logout}>logout</a>
    </div>
  );
};

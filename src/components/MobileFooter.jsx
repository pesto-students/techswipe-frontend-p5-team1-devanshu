import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import MessageIcon from "../assets/envelope-solid.svg";
//
import HomeIcon from "../assets/house-solid.svg";
import UserIcon from "../assets/user-solid.svg";
import HeartIcon from "../assets/heart-regular.svg";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const MobileFooter = () => {
  const navigate = useNavigate();
  const [localToken] = useLocalStorage("token", "");
  const { userId } = jwt_decode(localToken);

  return (
    <div className="flex justify-around md:hidden items-center bg-blue-500 p-3">
      <img
        onClick={() => navigate("/dashboard")}
        src={HomeIcon}
        alt="home"
        className="h-8 w-8 cursor-pointer"
      />
      <img
        onClick={() => navigate("/matches")}
        alt="home"
        src={HeartIcon}
        className="h-8 w-8 cursor-pointer"
      />
      <img
        onClick={() => navigate("/messages")}
        alt="home"
        src={MessageIcon}
        className="h-8 w-8 cursor-pointer"
      />
      <img
        onClick={() => navigate(`/profile/${userId}`)}
        src={UserIcon}
        alt="home"
        className="h-8 w-8 cursor-pointer"
      />
    </div>
  );
};

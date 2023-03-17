import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
//
import Logo from "../assets/Logo.svg";
import { getUserInfo } from "../utils/api";

export const Header = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const { id } = useParams();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (isLoading) return <div>Loading....</div>;

  return (
    <div className="flex justify-between items-center p-3 flex-wrap bg-blue-500 md:h-16 text-white">
      <div className="flex items-center">
        {!id ? (
          <div
            className="flex items-center cursor-pointer hover:bg-blue-400 p-2 rounded-full"
            onClick={() => navigate(`/profile/${user["_id"]}`)}
          >
            <img
              src={user?.profilePhoto}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2 text-center md:text-xl">{user.name}</div>
          </div>
        ) : (
          <div
            className="flex items-center cursor-pointer hover:bg-blue-400 p-2 rounded-full"
            onClick={() => navigate(`/dashboard`)}
          >
            <img src={Logo} alt="logo" className="w-8 h-8 rounded-full" />
            <div className="ml-2 text-center md:text-xl">TechSwipe</div>
          </div>
        )}
      </div>
      {/* <div className="" onClick={() => navigate("/")}>
          </div> */}
      <div>
        <div onClick={handleLogout} className="block logout-btn">
          Logout
        </div>
      </div>
    </div>
  );
};

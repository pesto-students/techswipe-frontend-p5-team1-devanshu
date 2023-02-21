import React from "react";
import HomeIcon from "../assets/house-solid.svg";
import UserIcon from "../assets/user-solid.svg";
import HeartIcon from "../assets/heart-regular.svg";
import MessageIcon from "../assets/envelope-solid.svg";
import { useNavigate } from "react-router-dom";

export const MobileFooter = () => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-around m-2 md:hidden items-center">
			{/* MobileFooter */}
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
				onClick={() => navigate("/profile")}
				src={UserIcon}
				alt="home"
				className="h-8 w-8 cursor-pointer"
			/>
		</div>
	);
};

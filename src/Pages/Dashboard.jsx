import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../utils/data";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
import Logo from "../assets/Logo.svg";

const logout = "http://localhost:3030/auth/logout";
export const Dashboard = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col justify-evenly">
			<div
				className="md:flex md:flex-row md:h-screen"
				aria-label="sidebar-header"
			>
				<div className="flex flex-col md:w-1/3 bg-green-400">
					<Header />
					<div></div>
				</div>
				<div className="flex  flex-col justify-center items-center w-full bg-red-500">
					<div className="mt-10 flex flex-col items-center justify-center w-full">
						{users.slice(0, 1).map((character, index) => (
							<ImageCard character={character} key={index} />
						))}
					</div>
				</div>
			</div>
			<MobileFooter />
		</div>
	);
};

const Header = () => {
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../utils/data";
import { ImageCard } from "./ImageCard";
import { MobileFooter } from "./MobileFooter";

export const Dashboard = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col justify-evenly">
			<div className="flex justify-center items-center">
				<div className="ml-2 text-center text-2xl mr-20">TechSwipe</div>
				<div className="" onClick={() => navigate("/")}>
					logout
				</div>
			</div>

			<div className="mt-10 flex flex-col items-center justify-center w-full">
				{users.slice(0, 5).map((character, index) => (
					<ImageCard character={character} />
				))}
			</div>
			<MobileFooter />
		</div>
	);
};

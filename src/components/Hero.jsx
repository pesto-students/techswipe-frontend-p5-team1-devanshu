import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//
import Logo from "../assets/Logo.svg";
import GithubLogo from "../assets/Github.svg";
import LinkedInLogo from "../assets/linkedIn.svg";

export const Hero = () => {
	const navigate = useNavigate();
	const [firstStep, setFirstStep] = useState(false);

	const handleSubmit = () => {
		navigate("/settings");
	};

	return (
		<div className="bg-blue-500 w-full h-screen flex flex-col justify-evenly items-center">
			<div className="flex flex-col items-center">
				<img src={Logo} alt="techSwipe logo" className="h-40 w-40" />
				<div className="text-white text-4xl text-center">
					A Developers paradise
				</div>
			</div>
			<div className="text-white text-2xl text-center">
				A Perfect place to find your ideal developer match.
			</div>
			<div className="">
				{!firstStep && (
					<button
						className="py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl"
						onClick={() => setFirstStep(true)}
					>
						Next
					</button>
				)}
				{firstStep && (
					<>
						<div
							className="mb-10 text-lg"
							onClick={() => setFirstStep(false)}
						>
							Back
						</div>
						<button
							className="bg-white rounded-md px-8 py-2 flex items-center justify-center mb-4 w-80"
							onClick={handleSubmit}
						>
							<img
								className="pr-2 h-10 w-10"
								src={LinkedInLogo}
								alt=""
							/>
							Sign in With LinkedIn
						</button>
						<button
							className="bg-white rounded-md px-8 py-2 flex items-center justify-center w-80"
							onClick={handleSubmit}
						>
							<img
								className="pr-2 h-10 w-10"
								src={GithubLogo}
								alt=""
							/>
							Sign in With Github
						</button>
					</>
				)}
			</div>
		</div>
	);
};

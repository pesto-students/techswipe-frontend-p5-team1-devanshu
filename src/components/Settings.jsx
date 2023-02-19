import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
	const navigate = useNavigate();

	const [stepTwo, setStepTwo] = useState(false);
	return (
		<div>
			<img src="" alt="Profile pic" />
			<div>DOB</div>
			{!stepTwo ? (
				<div className="p-2 w-full">
					<div className="text-lg font-medium mb-4">
						Account settings
					</div>
					<div className="flex flex-col">
						<label className="font-semibold">Name</label>
						<input
							placeholder="Name"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>

					<div className="flex flex-col">
						{/*FIXME:Change to drop down   */}
						<label className="font-semibold">Gender</label>
						<input
							placeholder="Name"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>

					<div className="flex flex-col">
						<label className="font-semibold">Phone Number</label>
						<input
							placeholder="Phone Number"
							className="border-2 p-2 my-2"
							type="number"
						/>
					</div>
					<div className="flex flex-col">
						<label className="font-semibold">Date of birth</label>
						<input
							placeholder="Date of birth"
							className="border-2 p-2 my-2"
							type="date"
						/>
					</div>
					<div className="flex flex-col">
						<label className="font-semibold">Email</label>
						<input
							placeholder="Email"
							className="border-2 p-2 my-2"
							type="email"
						/>
					</div>

					<div className="text-lg font-bold mb-4">
						Discovery settings
					</div>

					<div className="flex flex-col">
						<label className="font-semibold">Location</label>
						<input
							placeholder="Location"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label className="font-semibold">
							Preferred Language
						</label>
						<input
							placeholder="Preferred Language"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label className="font-semibold">Show me </label>
						<input
							placeholder="Show me"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>
				</div>
			) : (
				<div className="p-2">
					<div className="flex flex-col">
						<label className="font-semibold">
							Where do you work?
						</label>
						<input
							placeholder="Where do you work?"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label className="font-semibold">
							What is your role in your company?
						</label>
						<input
							placeholder="What is your role in your company?"
							className="border-2 p-2 my-2"
							type="text"
						/>
					</div>
					<div className="font-semibold text-lg">
						Select your favorite languages?
					</div>
					<div>drop down needs to be there</div>
					<div className="font-semibold text-lg    ">
						Select your Interests?
					</div>
					<div>drop down needs to be there</div>

					<div className="font-medium mb-4 text-3xl">
						Answer the following questions
					</div>

					<button
						className="text-center py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl"
						onClick={() => navigate("/dashboard")}
					>
						Start Swiping
					</button>
				</div>
			)}
			{
				<button
					className="text-center py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl"
					onClick={() => setStepTwo(true)}
				>
					{!stepTwo ? "Next" : "Back"}
				</button>
			}
		</div>
	);
};

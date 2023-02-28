import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
//
import LeftArrow from "../assets/arrow-left.svg";
//
import {
	GeoapifyGeocoderAutocomplete,
	GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export const Settings = () => {
	const navigate = useNavigate();

	const [stepTwo, setStepTwo] = useState(false);
	const [userData, setUserData] = useState({});
	const [selectedOption, setSelectedOption] = useState(null);

	const handleValueChanges = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const [location, setLocation] = useState("");

	function onPlaceSelect(value) {
		console.log(value);
		setLocation(value.properties.formatted);
	}

	function onSuggectionChange(value) {
		console.log(value);
	}

	console.log({ location, userData });

	const options = [
		{ value: "male", label: "Male" },
		{ value: "female", label: "Female" },
		{ value: "others", label: "Others" },
	];

	const developerOptions = [
		{ value: "full stack developer", label: "Full stack Developer" },
		{ value: "frontend Developer", label: "Frontend Developer" },
		{ value: "backend Developer", label: "Backend Developer" },
		{ value: "devops", label: "Devops" },
		{ value: "test engineer", label: "Test engineer" },
	];

	return (
		<div className="">
			<div className="flex items-center justify-between bg-blue-400 p-4 mb-4">
				<div className="text-2xl">TechSwipe </div>
				<div className="mr-2 " onClick={() => setStepTwo(false)}>
					<img src={LeftArrow} className="h-8 w-8" />
				</div>
			</div>
			<div className="p-2">
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
								name="name"
								placeholder="Name"
								className="border-2 p-2 my-2"
								type="text"
								value={userData.name || ""}
								onChange={handleValueChanges}
							/>
						</div>

						<div className="flex flex-col">
							{/*FIXME:Change to drop down   */}
							<label className="font-semibold">Gender</label>
							<Select
								placeholder="Gender"
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={options}
							/>
						</div>

						<div className="flex flex-col">
							<label className="font-semibold">
								Phone Number
							</label>
							<input
								placeholder="Phone Number"
								className="border-2 p-2 my-2"
								type="number"
							/>
						</div>
						<div className="flex flex-col">
							<label className="font-semibold">
								Date of birth
							</label>
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

							<GeoapifyContext apiKey="112eddcf23924c998ccb79ed3f2c3b6c">
								<GeoapifyGeocoderAutocomplete
									placeholder="Enter address here"
									type="city"
									limit={10}
									value={location}
									placeSelect={onPlaceSelect}
									suggestionsChange={onSuggectionChange}
								/>
							</GeoapifyContext>
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
							<Select
								placeholder="Gender"
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={developerOptions}
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
				{!stepTwo && (
					<button
						className="text-center py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl"
						onClick={() => setStepTwo(true)}
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

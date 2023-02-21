/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

import { ImageCard } from "./components/ImageCard";
import { MobileFooter } from "./components/MobileFooter";
import { Settings } from "./components/Settings";
import { users } from "./utils/data";

function App(props) {
	return (
		<div className="h-screen">
			{/* <h1 className="bg-blue-400 text-4xl text-black mb-4">TechSwipe</h1> */}
			{props.settings && <Settings />}
		</div>
	);
}

export default App;

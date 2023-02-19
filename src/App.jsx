/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Settings } from "./components/Settings";

function App(props) {
	// const [count, setCount] = useState(0)

	return (
		<div className=" h-screen">
			{/* <h1 className="bg-blue-400 text-4xl text-black mb-4">TechSwipe</h1> */}
			{props.settings && <Settings />}
			<div className="flex flex-col justify-evenly">
				<div className="flex justify-center items-center">
					<div className="ml-2 text-center text-2xl mr-20">
						TechSwipe
					</div>
					<div className="">Filter button</div>
				</div>
				<div className="bg-blue-200 h-40">Profile image</div>
				<div className="bg-blue-600 h-40">Footer</div>
			</div>
		</div>
	);
}

export default App;

/* eslint-disable react/prop-types */
import React from "react";

export const Button = ({ className }) => {
	return (
		<button
			className={`bg-white rounded-md px-8 py-2 flex items-center justify-center mb-4 w-80 ${className}`}
		>
			Button
		</button>
	);
};

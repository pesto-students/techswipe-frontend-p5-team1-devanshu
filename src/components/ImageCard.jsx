import React from "react";

export const ImageCard = ({ character }) => {
	return (
		<div className="w-[220px] h-60 relative mb-10 border-2  border-black">
			<div
				className="w-full h-full rounded-sm absolute"
				style={{
					backgroundImage: "url(" + character.url + ")",
				}}
			></div>
			<div className="w-full absolute bottom-0 bg-black text-white w-50 opacity-40 text-xl">
				{character.name}
			</div>
		</div>
	);
};

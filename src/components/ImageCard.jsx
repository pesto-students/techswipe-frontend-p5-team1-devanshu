import React from "react";

export const ImageCard = ({ character }) => {
	return (
		<div className="w-[400px] mb-10 border-2 flex  flex-col border-black bg-white rounded-md">
			{/* <div
				className="w-full h-full rounded-sm absolute"
				style={{
					backgroundImage: "url(" + character.url + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			></div> */}
			<div className="flex">
				<img
					src="https://randomuser.me/api/portraits/men/12.jpg"
					className="h-72 w-72"
				/>
				<div className="">
					<div className="bg-blue-500 w-full h-32 text-center py-4 text-white font-medium">
						<div>
							6 <br /> Years
						</div>
					</div>
					<div className="p-2">languages logos</div>
				</div>
			</div>
			<div className="m-3">
				<div className="w-full text-xl">{character.name}</div>
				<div className="my-4 p-2 border-b-2 bg-blue-500 rounded-md w-fit">
					Full stack Developer{" "}
				</div>
				<div className="">
					I’m a software developer with 6+ years of experience. I’m
					most attracted to solving real customer problems.
				</div>
			</div>
		</div>
	);
};

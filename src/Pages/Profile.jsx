import React from "react";
import App from "../App";
import { MobileFooter } from "../components/MobileFooter";

export const Profile = () => {
	return (
		<div>
			<App settings={true} />
			<div className="mt-28">
				<MobileFooter />
			</div>
		</div>
	);
};

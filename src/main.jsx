import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import ErrorPage from "./components/error-page";
import { Hero } from "./components/Hero";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { Matches } from "./components/Matches";
import { Messages } from "./components/Messages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Hero />,
		errorElement: <ErrorPage />,
	},

	{
		path: "/login",
		element: <App settings={true} />,
	},
	{

	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/matches",
		element: <Matches />,
	},
	{
		path: "/messages",
		element: <Messages />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);

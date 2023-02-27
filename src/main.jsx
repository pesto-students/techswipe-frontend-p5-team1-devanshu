import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Hero } from "./Pages/Hero";
import { Profile } from "./Pages/Profile";
import { Dashboard } from "./Pages/Dashboard";

import { Matches } from "./components/Matches";
import { Messages } from "./components/Messages";
import ErrorPage from "./components/error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Hero />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <Hero />,
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

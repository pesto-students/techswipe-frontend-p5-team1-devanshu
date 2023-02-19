import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import { Hero } from "./components/Hero";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Hero />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/settings",
		element: <App settings={true} />,
	},
	{
		path: "/dashboard",
		element: <App settings={false} />,
	},
	{
		path: "/app",
		element: <App />,
	},
	{
		path: "/app",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);

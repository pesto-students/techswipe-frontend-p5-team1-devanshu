import React from "react";
import ReactDOM from "react-dom/client";
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";
//
import "./index.css";
import { Hero } from "./Pages/Hero";
import { Profile } from "./Pages/Profile";
import { Dashboard } from "./Pages/Dashboard";

import { Matches } from "./components/Matches";
import { Messages } from "./Pages/Messages";
import ErrorPage from "./components/error-page";
import { Login } from "./Pages/Login";
import { PrivateRouter } from "./Pages/PrivateRouter";

const queryClient = new QueryClient();
const baseURL = import.meta.env.VITE_BACKEND_API;
const token = JSON.parse(localStorage.getItem("token"));

const socket = io(baseURL, {
  auth: {
    token,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <Profile />
      </PrivateRouter>
    ),
  },
  {
    path: "/matches",
    element: (
      <PrivateRouter>
        <Matches />
      </PrivateRouter>
    ),
  },
  {
    path: "/messages",
    element: (
      <PrivateRouter>
        <Messages socket={socket} />
      </PrivateRouter>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

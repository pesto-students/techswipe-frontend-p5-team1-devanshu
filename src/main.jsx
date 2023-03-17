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

import { Matches } from "./Pages/Matches";
import { Messages } from "./Pages/Messages";
import ErrorPage from "./components/error-page";
import { Login } from "./Pages/Login";
import { PrivateRouter } from "./Pages/PrivateRouter";
import { ErrorFallback } from "./components/ErrorFallback";
import { ProfileCompleteRoute } from "./Pages/ProfileCompleteRoute";
import { SelectedProfilePage } from "./Pages/SelectedProfilePage";
import { UpdateProfile } from "./Pages/UpdateProfile";

import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const NODE_ENV = import.meta.env.VITE_NODE_ENV;

if (NODE_ENV === "production") {
  console.log("came to this block");
  Sentry.init({
    dsn: "https://0564fc7663ff4a29946311255904b2bf@o4504848420110336.ingest.sentry.io/4504848422469632",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
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
    errorElement: <ErrorFallback />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <ProfileCompleteRoute>
          <Dashboard socket={socket} />
        </ProfileCompleteRoute>
      </PrivateRouter>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <Profile socket={socket} />
      </PrivateRouter>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/updateProfile",
    element: (
      <PrivateRouter>
        <ProfileCompleteRoute>
          <UpdateProfile socket={socket} />
        </ProfileCompleteRoute>
      </PrivateRouter>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/matches",
    element: (
      <PrivateRouter>
        <ProfileCompleteRoute>
          <Matches socket={socket} />
        </ProfileCompleteRoute>
      </PrivateRouter>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/messages",
    element: (
      <PrivateRouter>
        <ProfileCompleteRoute>
          <Messages socket={socket} />
        </ProfileCompleteRoute>
      </PrivateRouter>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/profile/:id",
    element: (
      <PrivateRouter>
        <ProfileCompleteRoute>
          <SelectedProfilePage socket={socket} />
        </ProfileCompleteRoute>
      </PrivateRouter>
    ),
    errorElement: <ErrorFallback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

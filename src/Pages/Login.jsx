import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
//
import { getProfileStatus } from "../utils/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
//
import ErrorImage from "../assets/error.jpg";

export const Login = () => {
  const navigate = useNavigate();
  const { token, failed } = queryString.parse(window.location.search);
  // eslint-disable-next-line no-unused-vars
  const [localToken, setToken] = useLocalStorage("token", "");
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const profileStatus = async (token) => {
    const response = await getProfileStatus(token);
    if (!response.profileStatus.profileComplete) {
      navigate("/profile");
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (token) {
      setToken(token);
      profileStatus(token);
    }

    if (failed === "true") {
      setShowLoginMessage(true);
    }
  }, [token, failed]);

  return (
    <div>
      {showLoginMessage && (
        <div className="flex items-center flex-col justify-center h-screen">
          <img src={ErrorImage} alt="error messages" className="h-96" />
          <h1 className="text-lg font-semibold">Login Failed</h1>
          <button
            className="text-center py-2 bg-blue-700 w-72 text-white rounded-md border-none text-xl mt-4"
            onClick={() => navigate("/")}
          >
            Please try again
          </button>
        </div>
      )}
    </div>
  );
};

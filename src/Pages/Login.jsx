import React, { useEffect } from "react";
import queryString from "query-string";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getProfileStatus } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { token } = queryString.parse(window.location.search);
  // eslint-disable-next-line no-unused-vars
  const [localToken, setToken] = useLocalStorage("token", "");

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
  }, [token]);

  return <div></div>;
};

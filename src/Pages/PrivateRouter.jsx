/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const PrivateRouter = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return <>{props.children}</>;
};

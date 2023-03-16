/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../utils/api";

export const ProfileCompleteRoute = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    onSuccess: (data) => {
      if (!data.privacy.profileComplete) {
        navigate("/profile");
      }
    },
  });

  return <>{props.children}</>;
};

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserMatchedProfiles } from "../utils/api";

const MatchCard = ({ data }) => {
  return <div>{data}</div>;
};

export const Matches = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["matchedProfiles"],
    queryFn: getUserMatchedProfiles,
  });

  if (isLoading) return <div>Loading....</div>;
  return (
    <div>
      {" "}
      {/* {data && data.map((data, index) => <MatchCard data={data} key={index} />)} */}
    </div>
  );
};

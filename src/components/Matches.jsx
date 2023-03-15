import React from "react";
import SwipeLogo from "../assets/swipe.png";
import { useQuery } from "@tanstack/react-query";
import { getUserMatchedProfiles } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const MatchesComponent = ({ setSelectedIndex }) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["matches"],
    queryFn: getUserMatchedProfiles,
  });
  if (isLoading) return <div>Loading...</div>;

  const { matchedProfiles } = data;

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap items-center justify-around">
        {matchedProfiles && matchedProfiles.length > 0 ? (
          matchedProfiles.map((profile, index) => (
            <div
              key={index}
              className="w-30 p-4"
              onClick={() => setSelectedIndex(1)}
            >
              <img
                src={profile.profilePhoto}
                className="h-20 w-20   rounded-full"
              />
              <h1 className="text-center pt-2">{profile.name.split(" ")[0]}</h1>
            </div>
          ))
        ) : (
          <NoMatches />
        )}
      </div>
    </div>
  );
};

const NoMatches = () => {
  return (
    <div className="text-center  flex flex-col justify-center items-center p-2">
      <img src={SwipeLogo} alt="" />
      <h1>Start Swiping</h1>
      Matches will appear here once you start to Like people. You can message
      them directly from here when you’re ready to spark up the conversation.
    </div>
  );
};

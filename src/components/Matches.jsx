import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//
import SwipeLogo from "../assets/swipe.png";
import { getUserMatchedProfiles } from "../utils/api";

export const MatchesComponent = ({ setSelectedIndex, selectedIndex }) => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: getUserMatchedProfiles,
  });
  if (isLoading) return <div>Loading...</div>;

  const { matchedProfiles } = data;

  return (
    <div className="w-full h-full">
      <h1 className="block md:hidden  mt-2 text-lg font-semibold border-b-2 p-2">
        Matches List
      </h1>
      <div className="flex flex-wrap items-center justify-around w-80">
        {matchedProfiles && matchedProfiles.length > 0 ? (
          matchedProfiles.map((profile, index) => (
            <div
              key={index}
              className="w-30 p-4"
              onClick={() =>
                selectedIndex ? setSelectedIndex(1) : navigate("/messages")
              }
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

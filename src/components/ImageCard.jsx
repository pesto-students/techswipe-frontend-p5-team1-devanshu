import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { techStackIcons } from "../utils/constants";

export const ImageCard = ({ character, isLoggedUser }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-[290px] sm:w-[360px] md:w-[360px] my-10 border-2 border-slate-300 bg-white rounded-md max-w-lg select-none">
      <div className="flex">
        <img
          src={character.profilePhoto}
          className="h-72 md:w-72 rounded-t-md sm:rounded-tl-md img-control"
        />
        <div className="hidden sm:block md:block grow">
          <div className="bg-blue-500 text-center py-4 text-white font-medium rounded-tr-md">
            <div>
              {character?.workExperience === "<1"
                ? "<1 year"
                : `${character.workExperience} years`}
            </div>
          </div>
          <div className="p-2 flex flex-col">
            {character.techStack.slice(0, 3).map((stack, index) => (
              <div key={index}>
                <img
                  src={techStackIcons[stack]}
                  className="h-12 w-12 mt-2 rounded-md border-2 img-control"
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="p-3 pb-0">
          {character?.hotProfile && (
            <div className="text-red-400">🔥 Profile</div>
          )}
          <div className="flex items-center justify-between">
            <div className="text-xl">{character.name}</div>
            {isLoggedUser && (
              <div
                className="p-2 px-4 border-b-2 bg-blue-500 w-fit text-white rounded-md"
                onClick={() => navigate("/updateProfile")}
              >
                Edit
              </div>
            )}
          </div>
          <div className="my-4 p-2 border-b-2 bg-blue-500 rounded-md w-fit text-white">
            {character.role}
          </div>
          {character.company && (
            <div className="font-semibold mb-2">
              Working at {character.company}
            </div>
          )}
          {
            <div className="text-ellipsis">
              {character.bio.slice(0, 50) + "..."}
            </div>
          }
          <button
            className={classNames(
              "text-blue-600 font-semibold mt-2 pressable",
              showMore ? "" : " mb-2"
            )}
            onClick={() => setShowMore(!showMore)}
          >
            Show {!showMore ? "more" : "less"}
          </button>
        </div>
        {showMore && (
          <>
            <div className="p-3 pt-0">
              <h1 className="font-semibold text-md mt-2">
                Favorite Tech Stack
              </h1>
              <div className="rounded-md flex flex-wrap my-2 gap-1 text-white">
                {character?.techStack.map((stack, index) => (
                  <div
                    key={index}
                    className={
                      "border-2 rounded-full w-fit p-1 px-2 m-1 flex items-center text-sm" +
                      " bg-blue-400"
                    }
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-2 p-3">
              <h1 className="font-semibold text-md mt-2">Interests</h1>
              <div className="rounded-md flex flex-wrap my-2 gap-1 text-white">
                {character?.interest.map((interest, index) => (
                  <div
                    key={index}
                    className={
                      "border-2 rounded-full w-fit p-1 px-2 m-1 flex items-center text-sm" +
                      " bg-blue-400"
                    }
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

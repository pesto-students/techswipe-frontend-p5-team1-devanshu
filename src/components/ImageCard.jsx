/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { techStackIcons } from "../utils/constants";

export const ImageCard = ({ character }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-[360px] my-10 border-2 border-slate-300 shadow-md  bg-white rounded-md">
      <div className="flex md:max-w-md">
        <img
          src="https://randomuser.me/api/portraits/men/12.jpg "
          className="h-72 md:w-72 rounded-tl-md"
        />
        <div className="hidden sm:block md:block grow">
          <div className="bg-blue-500 text-center py-4 text-white font-medium rounded-tr-md">
            <div>
              6 <br /> Years
            </div>
          </div>
          <div className="p-2 flex flex-col">
            {character.techStack.slice(0, 3).map((stack, index) => (
              <div key={index}>
                <img
                  src={techStackIcons[stack]}
                  className="h-12 w-12 mt-2 rounded-md border-2"
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="w-full text-xl">{character.name}</div>
        <div className="my-4 p-2 border-b-2 bg-blue-500 rounded-md w-fit">
          {character.role}
        </div>
        <div className="">{character.bio}</div>
        <button
          className="text-blue-400"
          onClick={() => setShowMore(!showMore)}
        >
          Show more
        </button>
        {showMore && (
          <div className="">
            <div className="">Favorite Tech Stack</div>
            <div>Interests</div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
// import { useNavigate } from "react-router-dom";

import { users } from "../utils/data";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import TinderCard from "react-tinder-card";

export const Dashboard = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
        <Header />
        <div className="hidden md:block">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-scroll relative">
        {users.map((character, index) => (
          <TinderCard
            className="absolute"
            key={index}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["right", "left"]}
          >
            <ImageCard character={character} key={index} />
          </TinderCard>
        ))}
      </div>
      <MobileFooter />
    </div>
  );
};

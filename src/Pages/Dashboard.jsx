import React from "react";
// import { useNavigate } from "react-router-dom";
import { users } from "../utils/data";
import TinderCard from "react-tinder-card";
import { useMutation } from "@tanstack/react-query";
//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
import { postUserDisLike, postUserLike } from "../utils/api";
import DisLike from "../assets/dislike.svg";
import Like from "../assets/like.svg";

export const Dashboard = () => {
  const handleLikeMutation = useMutation({
    mutationFn: postUserLike,
    onSuccess: () => {
      // navigate("/dashboard");
    },
  });

  const handleDislikeMutation = useMutation({
    mutationFn: postUserDisLike,
    onSuccess: () => {
      // navigate("/dashboard");
    },
  });
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
      <div className="flex flex-col items-center w-full h-full overflow-scroll">
        <div className="flex flex-col items-center w-full relative">
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
        <div className="border-0 flex w-80 mt-[530px] justify-between">
          <img
            src={DisLike}
            alt=""
            className="h-20 w-20"
            onClick={handleDislikeMutation}
          />
          <img
            src={Like}
            className="h-20 w-20"
            alt=""
            onClick={handleLikeMutation}
          />
        </div>
      </div>

      <MobileFooter />
    </div>
  );
};

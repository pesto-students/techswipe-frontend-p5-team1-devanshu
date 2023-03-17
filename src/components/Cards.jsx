import React, { useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { useMutation, useQuery } from "@tanstack/react-query";
// //
import { ImageCard } from "./ImageCard";
import {
  getUserPossibleMatches,
  postUserDisLike,
  postUserLike,
} from "../utils/api";
//
import Like from "../assets/like.svg";
import DisLike from "../assets/dislike.svg";

export const TinderCardsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data } = useQuery({
    queryKey: ["profiles"],
    queryFn: getUserPossibleMatches,
    onSuccess: (data) => {
      setCurrentIndex(data.possibleMatches.length - 1);
    },
  });

  const handleLikeMutation = useMutation({
    mutationFn: postUserLike,
  });

  const handleDislikeMutation = useMutation({
    mutationFn: postUserDisLike,
  });

  const possibleMatchs = (data && data?.possibleMatches) || [];

  // eslint-disable-next-line no-unused-vars
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(possibleMatchs.length)
        .fill(0)
        .map((i) => React.createRef()),
    [possibleMatchs]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  // calls the api's as well to add them to like & dislike profiles
  const swiped = (direction, item, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (Object.keys(item).length > 0) {
      if (direction === "left") {
        handleDislikeMutation.mutate({ userId: item["_id"] });
      } else {
        handleLikeMutation.mutate({ userId: item["_id"] });
      }
    }
  };

  const outOfFrame = (name, idx) => {
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < possibleMatchs.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center w-80 h-[640px] relative max-w-lg">
        {possibleMatchs.length === 0 && (
          <div>
            You have reached your limit, Please try to refresh & comeback after
            some time{" "}
          </div>
        )}
        {currentIndex === -1 && (
          <div className="flex h-[640px] mt-25">
            You have reached your limit, Please try to refresh & comeback after
            some time{" "}
          </div>
        )}
        {possibleMatchs.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className={`absolute `}
            style={{ top: index * 2 }}
            key={index}
            onSwipe={(dir) => swiped(dir, character, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
            flickOnSwipe={false}
          >
            <ImageCard character={character} key={index} />
          </TinderCard>
        ))}
      </div>
      <div className="border-0 flex justify-around mb-5">
        <img
          src={DisLike}
          alt=""
          className="h-20 w-20"
          onClick={() => swipe("left")}
        />
        <img
          src={Like}
          className="h-20 w-20"
          alt=""
          onClick={() => swipe("right")}
        />
      </div>
    </div>
  );
};

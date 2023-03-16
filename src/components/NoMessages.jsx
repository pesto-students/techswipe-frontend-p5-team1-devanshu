import React from "react";
import SwipeLogo from "../assets/message.svg";

export const NoMessages = () => {
  return (
    <div className="text-center  flex flex-col justify-center items-center p-2">
      <img src={SwipeLogo} alt="" className="h-40 mb-4 w-30" />
      <h1 className="text-center font-semibold">Say Hello</h1>
      <p className="p-2">
        Looking to strike up a conversation? When you match with others, you can
        send them a message.
      </p>
    </div>
  );
};

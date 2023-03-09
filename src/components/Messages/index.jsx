import React from "react";
import { Header } from "../Header";
import { MobileFooter } from "../MobileFooter";
import { NoMessages } from "../NoMessages";
import { Sidebar } from "../Sidebar";

export const Messages = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-2">
      <NoMessages />
    </div>
  );
};

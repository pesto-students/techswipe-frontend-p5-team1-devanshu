import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
import { Sidebar } from "../components/Sidebar";
import { getUserFromId } from "../utils/api";

export const SelectedProfilePage = ({ socket }) => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: "individualProfile",
    queryFn: async () => getUserFromId(id),
  });

  if (isLoading) return <>Loading....</>;
  console.log(data);
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
          <Header />
          <div className="hidden md:block">
            <Sidebar socket={socket} />
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-full overflow-scroll">
          <ImageCard character={data?.matchUserInfo} />
          {/* <div className="block md:hidden">
            <MessagesComponent socket={socket} />
          </div>
          <div className="hidden md:block">
            <TinderCardsList />
          </div> */}
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

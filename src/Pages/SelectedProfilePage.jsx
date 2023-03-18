import React from "react";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
//
import { getUserFromId } from "../utils/api";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SelectedProfilePage = () => {
  const { id } = useParams();

  const [localToken] = useLocalStorage("token", "");
  const { userId } = jwt_decode(localToken);

  const { data, isLoading } = useQuery({
    queryKey: ["individualProfile", id],
    queryFn: async () => getUserFromId(id),
  });

  if (isLoading) return <>Loading....</>;

  const isLoggedUser = id === userId;

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
          <Header />
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-full overflow-scroll">
          <ImageCard
            character={data?.matchUserInfo}
            isLoggedUser={isLoggedUser}
          />
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

import React, { useEffect, useState } from "react";
//
import { Settings } from "../components/settings";
import { Header } from "../components/Header";
import { MobileFooter } from "../components/MobileFooter";
import { Sidebar } from "../components/Sidebar";

export const Profile = ({ socket }) => {
  const [userCoordinates, setUseCoordinates] = useState([]);

  const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) =>
        setUseCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => {
        setUseCoordinates([]);
        console.log(err);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
        <Header />
        <div className="hidden md:block">
          <Sidebar socket={socket} />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-scroll">
        <Settings userCoordinates={userCoordinates} />
      </div>
      <MobileFooter />
    </div>
  );
};

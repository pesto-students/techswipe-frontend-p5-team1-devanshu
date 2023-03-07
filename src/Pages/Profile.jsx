import React from "react";
//
import { Settings } from "../components/settings";
import { Header } from "../components/Header";
import { MobileFooter } from "../components/MobileFooter";
import { Sidebar } from "../components/Sidebar";

export const Profile = () => {
  // const [userCoordinates, setUseCoordinates] = useState([]);

  // const getLocation = async () => {
  //   await navigator.geolocation.getCurrentPosition(
  //     (position) =>
  //       setUseCoordinates({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       }),
  //     (err) => console.log(err)
  //   );
  // };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <div className="flex flex-col justify-evenly">
      <div className="md:flex md:flex-row" aria-label="sidebar-header">
        <div className="flex flex-col md:w-1/3 border-r-2 border-slate-400">
          <Header />
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full md:max-w-md max-w-xs">
            <Settings />
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

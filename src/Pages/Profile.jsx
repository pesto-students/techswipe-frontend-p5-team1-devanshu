import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Settings } from "../components/settings";
import { MobileFooter } from "../components/MobileFooter";
import { updateProfileStep1, updateProfileStep2 } from "../utils/api";

export const Profile = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const [stepTwo, setStepTwo] = useState(false);

  const firstStepMutation = useMutation({
    mutationFn: updateProfileStep1,
    onSuccess: () => {
      setStepTwo(true);
    },
  });

  const secondStepMutation = useMutation({
    mutationFn: updateProfileStep2,
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

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
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-scroll">
        <Settings
          userCoordinates={userCoordinates}
          setStepTwo={setStepTwo}
          stepTwo={stepTwo}
          firstStepMutation={firstStepMutation}
          secondStepMutation={secondStepMutation}
        />
      </div>
      {pathname === "/profile" ? null : <MobileFooter />}
    </div>
  );
};

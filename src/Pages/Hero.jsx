import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import GithubLogo from "../assets/Github.svg";
import LinkedInLogo from "../assets/linkedIn.svg";
import { githubAPI, linkedInAPI } from "../utils/constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_API;

export const Hero = () => {
  const navigate = useNavigate();

  const [firstStep, setFirstStep] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [localToken, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (localToken) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="bg-blue-500 w-full h-screen flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-evenly items-center h-full lg:border-2 lg:w-1/2 my-10 rounded-md">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="techSwipe logo" className="h-40 w-40" />
          <div className="text-white text-4xl text-center">
            A Developers paradise
          </div>
        </div>
        <div className="text-white text-2xl text-center">
          A Perfect place to find your ideal developer match.
        </div>
        <div className="">
          {!firstStep && (
            <button
              className="py-2 bg-blue-700 text-white rounded-md border-none text-xl px-20"
              onClick={() => setFirstStep(true)}
            >
              Get Started
            </button>
          )}
          {firstStep && (
            <>
              <a
                className="bg-white rounded-md px-8 py-2 flex items-center justify-center mb-4 w-72"
                // onClick={() => setShowGuestUserLogin(!showGuestUserLogin)}
                href={`${BACKEND_URL}/api/user/randomUser?email=pestoproject@gmail.com`}
              >
                Guest user Login
              </a>
              {/* {showGuestUserLogin && (
                <div>
                  <Select placeholder="Select a guest user email to login" value={}  />
                  <a
                    href={`${BACKEND_URL}/api/user/randomUser?email=Tillman92@hotmail.com`}
                  >
                    Login
                  </a>
                </div>
              )} */}
              <a
                className="bg-white rounded-md px-8 py-2 flex items-center justify-center mb-4 w-72"
                href={linkedInAPI}
              >
                <img className="pr-2 h-10 w-10" src={LinkedInLogo} alt="" />
                Sign in With LinkedIn
              </a>

              <a
                className="bg-white rounded-md px-8 py-2 flex items-center justify-center w-72"
                href={githubAPI}
              >
                <img className="pr-2 h-10 w-10" src={GithubLogo} alt="" />
                Sign in With Github
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

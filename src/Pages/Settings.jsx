import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useController, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
//
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
//
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { developerOptions, options } from "../utils/constants";
//
import { getUserInfo, UpdateUserInfo } from "../utils/api";

export const Settings = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    onSuccess: (data) => {
      reset({ ...data, distanceRange: 200 });
    },
  });

  const firstStepMutation = useMutation({
    mutationFn: UpdateUserInfo,
    onSuccess: () => {
      setStepTwo(true);
      console.log("updated user info");
    },
  });

  const { register, handleSubmit, reset, control, watch } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      distanceRange: 200,
    },
  });
  const { field: genderField } = useController({
    name: "gender",
    control,
    defaultValue: user?.gender || "Male",
    rules: { required: true },
  });
  const { field: discoveryGender } = useController({
    name: "discoveryGender",
    control,
    rules: { required: true },
  });
  const { field: developerField } = useController({
    name: "role",
    defaultValue: "All",
    control,
    rules: { required: true },
  });

  const distanceRange = watch("distanceRange");

  const [stepTwo, setStepTwo] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState(null);

  const [location, setLocation] = useState("");

  useEffect(() => {}, []);

  function onPlaceSelect(value) {
    console.log(value);
    setLocation(value.properties.formatted);
  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  const onSubmit = (data) => {
    const transformedFields = {
      ...data,
      gender: data.gender.value,
      discoverySettings: {
        role: data.role.value, //default value
        gender: data.discoveryGender.value,
        ageRange: [], // array
        radius: 100, // 100KM
      },
    };
    console.log({ transformedFields });
    // {
    // 	"name": "Sridhar Katta",
    // 	"email": "kattasridhar02@gmail.com",
    // 	"phoneNumber": "",
    // 	"gender": {
    // 		"value": "female",
    // 		"label": "Female"
    // 	},
    // 	"discoveryGender": {
    // 		"value": "male",
    // 		"label": "Male"
    // 	},
    // 	"developerType": {
    // 		"value": "frontend Developer",
    // 		"label": "Frontend Developer"
    // 	},
    // 	"dateOfBirth": ""
    // }
    // firstStepMutation(transformedFields);
  };

  if (!user) return null;

  return (
    <div className="md:border-2 md:border-slate-500 my-4 md:my-10 md:rounded-md">
      <div className="px-2 md:py-2 flex flex-col items-center">
        <img src="" alt="Profile pic" />
        <div>DOB</div>
        {!stepTwo ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <div className="text-lg font-medium mb-4">Account settings</div>
              <div className="flex flex-col">
                <label className="font-semibold">Name *</label>
                <input
                  className="border-2 p-2 my-2"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Email *</label>
                <input
                  placeholder="Email"
                  className="border-2 p-2 my-2"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="font-semibold">Gender *</label>
                <Select
                  {...genderField}
                  placeholder="Gender"
                  //   defaultValue={selectedOption}
                  //   onChange={setSelectedOption}
                  options={options}
                />
              </div>

              {/* <div className="flex flex-col">
                <label className="font-semibold">Phone Number *</label>
                <input
                  placeholder="Phone Number"
                  className="border-2 p-2 my-2"
                  type="number"
                  {...register("phoneNumber")}
                />
              </div> */}
              <div className="flex flex-col">
                <label className="font-semibold">Date of birth *</label>
                <input
                  placeholder="Date of birth"
                  className="border-2 p-2 my-2"
                  type="date"
                  {...register("dateOfBirth", { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Profile Info *</label>
                <textarea
                  placeholder="Profile Info"
                  className="border-2 p-2 my-2"
                  type="text"
                  {...register("profileInfo", { required: true })}
                />
              </div>
              {/* <div className="flex flex-col">
                <label className="font-semibold">Age Range *</label>
                <RangeSlider />
              </div> */}
              <div className="border-2 p-2 my-2">
                <div className="flex flex-col">
                  <div className="flex justify-between font-semibold mb-2">
                    <div>Max Distance</div>
                    <div>{distanceRange}</div>
                  </div>
                  <input
                    type="range"
                    step={100}
                    min={100}
                    max={1000}
                    {...register("distanceRange")}
                  />
                </div>
              </div>
              <div className="text-lg font-bold mb-4">Discovery settings</div>
              <div className="flex flex-col">
                <label className="font-semibold">Location</label>

                <GeoapifyContext apiKey="112eddcf23924c998ccb79ed3f2c3b6c">
                  <GeoapifyGeocoderAutocomplete
                    placeholder="Enter address here"
                    type="city"
                    limit={10}
                    value={location}
                    placeSelect={onPlaceSelect}
                    suggestionsChange={onSuggectionChange}
                  />
                </GeoapifyContext>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Looking for</label>
                <Select
                  {...discoveryGender}
                  placeholder="Looking for"
                  //   defaultValue={selectedOption}
                  //   onChange={setSelectedOption}
                  options={options}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Show me </label>
                <Select
                  {...developerField}
                  placeholder="Show Me"
                  options={developerOptions}
                />
              </div>

              <button
                className="text-center py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl mt-10"
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
        ) : (
          <form>
            <div className="p-2">
              <div className="flex flex-col">
                <label className="font-semibold">Where do you work?</label>
                <input
                  placeholder="Where do you work?"
                  className="border-2 p-2 my-2"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">
                  What is your role in your company?
                </label>
                <input
                  placeholder="What is your role in your company?"
                  className="border-2 p-2 my-2"
                  type="text"
                />
              </div>
              <div className="font-semibold text-lg">
                Select your favorite languages?
              </div>
              <div>drop down needs to be there</div>
              <div className="font-semibold text-lg    ">
                Select your Interests?
              </div>
              <div>drop down needs to be there</div>

              <div className="font-medium mb-4 text-3xl">
                Answer the following questions
              </div>

              <button
                type="submit"
                className="text-center py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl"
                // onClick={() => navigate("/dashboard")}
              >
                Start Swiping
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

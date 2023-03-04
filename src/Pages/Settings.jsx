import React, { useState } from "react";
import Select from "react-select";
import { useController, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
//
// import RangeSlider from "react-range-slider-input";
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
import { PartTwo } from "../components/settings/PartTwo";

export const Settings = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    onSuccess: (data) => {
      reset({ ...data, radius: 1000 });
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
      radius: 1000,
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

  const radius = watch("radius");

  const [stepTwo, setStepTwo] = useState(true);
  const [location, setLocation] = useState("");

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
        ageRange: [24, 36], // array
        radius: radius, // 100KM
      },
    };
    console.log({ transformedFields });
    firstStepMutation.mutate(transformedFields);
  };

  if (!user) return null;

  return (
    <div className="md:border-2 md:border-slate-500 my-4 md:my-10 md:rounded-md">
      <div className="px-2 md:py-2 flex flex-col items-center">
        <img
          className="rounded-full h-30 w-20"
          src="https://res.cloudinary.com/dfzxo5erv/image/upload/v1677839698/generated-image-qvdrl_t83bcy.jpg"
          alt="Profile pic"
        />
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
                  {...register("birthday", { required: true })}
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
                    <div>{radius} KM</div>
                  </div>
                  <input
                    type="range"
                    step={1000}
                    min={1000}
                    max={10000}
                    {...register("radius")}
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
          <div>
            <PartTwo user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

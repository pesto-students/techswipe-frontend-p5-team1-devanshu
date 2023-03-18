import React, { useState } from "react";
import * as z from "zod";
import Select from "react-select";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
//
import { PartTwo } from "./PartTwo";
import { ImageUpload } from "../ImageUpload";
import { developerOptions, options } from "../../utils/constants";
import { getUserInfo } from "../../utils/api";

export const Settings = ({
  // userCoordinates,
  stepTwo,
  firstStepMutation,
  secondStepMutation,
}) => {
  const [profileImage, setProfileImage] = useState("");

  const schema = z.object({
    bio: z.string(),
    name: z.string().min(5),
    email: z.string().email(),
    // phoneNumber: z.string().length(10),
    phoneNumber: z.string(),
    radius: z.string(),
  });

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    onSuccess: (data) => {
      reset({
        name: data?.name || "",
        email: data?.email || "",
        phoneNumber: data?.phoneNumber || "",
        radius: data?.discoverySettings?.radius / 1000 || "",
        bio: data?.bio | "",
      });
      setProfileImage(data.profilePhoto);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      radius: user?.discoverySettings?.radius / 1000 || "",
      bio: user?.bio | "",
      gender: user?.gender || "",
    },
  });

  const { field: genderField } = useController({
    name: "gender",
    control,
    defaultValue: user?.gender || "",
    rules: { required: false },
  });

  const { field: discoveryGender } = useController({
    name: "discoveryGender",
    control,
    defaultValue: user?.discoverySettings?.gender || "",

    rules: { required: true, validate: () => {} },
  });

  const { field: developerField } = useController({
    name: "role",
    control,
    defaultValue: user?.discoverySettings?.role || "All",
    rules: { required: true, validate: () => {} },
  });

  const radius = watch("radius");

  const [location, setLocation] = useState({});
  const [ageRange, setAgeRange] = useState(user?.ageRange || [24, 36]);

  const onPlaceSelect = (value) => {
    setLocation({
      formattedAddress: value.properties.formatted,
      lat: value.properties.lat,
      lon: value.properties.lon,
    });
  };

  const getCoordinates = () => {
    if (user?.location?.coordinates) {
      const oldLocation = {
        lat: user?.location?.coordinates[0],
        lon: user?.location?.coordinates[1],
      };
      return `${oldLocation.lat},${oldLocation.lon}`;
    } else {
      return `${location.lat},${location.lon}`;
    }
  };

  const onSubmit = (enteredData, event) => {
    event.preventDefault();

    const transformedFields = {
      name: enteredData.name,
      profilePhoto: profileImage,
      phoneNumber: enteredData.phoneNumber,
      email: enteredData.email || user?.email,
      // TODO:FIXME to dynamic value
      place: "India ",
      bio: enteredData.bio,
      birthday: enteredData.birthday || "2023-03-03",
      gender: genderField.value.value,
      coordinates: getCoordinates(),
      discoverySettings: {
        role: developerField.value.value, //default value
        gender: discoveryGender.value.value,
        ageRange: ageRange, // array
        radius: radius * 1000, // 100KM
      },
    };

    firstStepMutation.mutate(transformedFields);
  };

  const handleAgeRange = (value) => {
    setAgeRange(value);
  };

  const hideLocation =
    user && user.location.coordinates.length > 0 ? true : false;

  if (!user) return null;

  return (
    <div className=" md:border-2 md:border-slate-500 my-4 md:my-10 md:rounded-md ">
      <div className="px-2 md:py-2 flex flex-col w-80 md:w-96 items-stretch">
        {/* <img
          className="rounded-full h-30 w-20 self-center"
          src="https://res.cloudinary.com/dfzxo5erv/image/upload/v1677839698/generated-image-qvdrl_t83bcy.jpg"
          alt="Profile pic"
        /> */}
        <ImageUpload
          user={user}
          setProfileImage={setProfileImage}
          profileImage={profileImage}
          stepTwo={stepTwo}
        />
        {errors.profilePhoto?.message && (
          <p className="text-red-400 mb-1">{errors.profilePhoto?.message}</p>
        )}
        {!stepTwo ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-lg font-semibold my-4 self-center">
                Account settings
              </div>
              <div>
                <div className="flex flex-col">
                  <label className="font-medium">Name *</label>
                  <input
                    className="border-2 p-2 my-2"
                    placeholder="Name"
                    {...register("name", { required: false })}
                  />
                  {errors.name?.message && (
                    <p className="text-red-400 mb-1">{errors.name?.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Email *</label>
                  <input
                    disabled={user?.email ? true : false}
                    placeholder="Email"
                    className="border-2 p-2 my-2"
                    type="email"
                    {...register("email", { required: false })}
                  />
                  {errors.email?.message && (
                    <p className="text-red-400 mb-1">{errors.email?.message}</p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="font-medium">Gender *</label>
                  <Select
                    {...genderField}
                    placeholder="Gender"
                    //   defaultValue={selectedOption}
                    //   onChange={setSelectedOption}
                    options={options}
                  />
                  {errors.gender?.message && (
                    <p className="text-red-400 mb-1">
                      {errors.gender?.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">Phone Number *</label>
                  <input
                    placeholder="Phone Number"
                    className="border-2 p-2 my-2"
                    type="number"
                    {...register("phoneNumber")}
                  />
                  {/* {errors.phoneNumber?.message && (
                    <p className="text-red-400 mb-1">
                      {errors.phoneNumber?.message}
                    </p>
                  )} */}
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Date of Birth *</label>
                  <input
                    placeholder="Date of birth"
                    className="border-2 p-2 my-2"
                    type="date"
                    {...register("birthday", { required: false })}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Profile Info *</label>
                  <textarea
                    placeholder="Profile Info"
                    className="border-2 p-2 mt-2"
                    type="text"
                    {...register("bio", { required: false })}
                  />
                  {errors.bio?.message && (
                    <p className="text-red-400 mb-1">{errors.bio?.message}</p>
                  )}
                </div>
                <div className="text-lg font-semibold my-2">
                  Discovery Settings
                </div>
                {!hideLocation && (
                  <>
                    <div className="flex flex-col">
                      <label className="font-medium">Location</label>

                      <GeoapifyContext apiKey="112eddcf23924c998ccb79ed3f2c3b6c">
                        <GeoapifyGeocoderAutocomplete
                          placeholder="Enter address here"
                          type="street"
                          limit={5}
                          value={location.formattedAddress || ""}
                          placeSelect={onPlaceSelect}
                        />
                      </GeoapifyContext>
                    </div>
                  </>
                )}
                <div className="border-2 px-2 my-2">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <label className="my-2">Age range {}</label>
                      <div>
                        {ageRange[0]} - {ageRange[1]}{" "}
                      </div>
                    </div>
                    <div className="my-2 mb-4">
                      <RangeSlider
                        className="w-2 bg-blue-400"
                        max={100}
                        value={ageRange}
                        onInput={handleAgeRange}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-2 p-2 my-4">
                  <div className="flex flex-col">
                    <div className="flex justify-between  mb-2">
                      <div>Max Distance</div>
                      <div>{radius} KM</div>
                    </div>
                    <input
                      type="range"
                      step={10}
                      min={10}
                      max={200}
                      {...register("radius")}
                    />
                    {/* {errors.radius?.message && (
                      <p className="text-red-400 mb-1">
                        {errors.radius?.message}
                      </p>
                    )} */}
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label className="font-medium mb-1">Looking for</label>
                  <Select
                    {...discoveryGender}
                    placeholder="Looking for"
                    options={options}
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label className="font-medium mb-1">Show me </label>
                  <Select
                    {...developerField}
                    placeholder="Show Me"
                    options={developerOptions}
                  />
                </div>
                <button
                  className="text-center py-2 bg-blue-700 w-full text-white rounded-md border-none text-xl mt-4 hover:cursor-pointer hover:bg-blue-900"
                  // onClick={() => setStepTwo(true)}
                >
                  Next
                </button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <PartTwo user={user} secondStepMutation={secondStepMutation} />
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  techStacks,
  userInterests,
  workExperiences,
} from "../../utils/constants";
import { UpdateUserInfo } from "../../utils/api";
import Select from "react-select";

export const PartTwo = () => {
  const secondStepMutation = useMutation({
    mutationFn: UpdateUserInfo,
    onSuccess: () => {
      console.log("updated user info");
    },
  });

  const { register, handleSubmit, reset, control, watch } = useForm({
    defaultValues: {},
  });

  const { field: workExperience } = useController({
    name: "role",
    defaultValue: "All",
    control,
    rules: { required: true },
  });

  const [items, setItems] = useState([]);
  const [techStack, setTechStack] = useState([]);

  const handleSelect = (value) => {
    if (!items.includes(value)) {
      setItems([...items, value]);
    } else {
      const newItems = items.filter((item) => item !== value);
      setItems(newItems);
    }
  };

  const handleTechStack = (value) => {
    if (!techStack.includes(value)) {
      setTechStack([...techStack, value]);
    } else {
      const newItems = techStack.filter((item) => item !== value);
      setTechStack(newItems);
    }
  };

  const onSubmit = (data) => {
    const transformedFields = {
      ...data,
    };
    console.log({ transformedFields });
    secondStepMutation.mutate(transformedFields);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="p-2">
          <div className="flex flex-col">
            <label className="font-semibold">Where do you work?</label>
            <input
              placeholder="Where do you work?"
              className="border-2 p-2 my-2"
              type="text"
              {...register("workCompany")}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Select your Experience</label>
            <Select
              {...workExperience}
              placeholder="Select your Experience"
              options={workExperiences}
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
              {...register("workCompany")}
            />
          </div>
          <div className="font-semibold text-lg">
            Select your favorite Tech Stack?
          </div>
          <div className="border-2 border-blue-500 rounded-md flex flex-wrap p-2 my-4">
            {techStacks.map((Stack, index) => (
              <div
                className={
                  "border-2 rounded-full w-fit p-2  px-4 m-2 flex items-center" +
                  (techStack.includes(Stack) ? " bg-blue-400" : "")
                }
                key={index}
                onClick={() => handleTechStack(Stack)}
              >
                {Stack}
              </div>
            ))}
          </div>
          <div className="font-semibold text-lg    ">
            Select your Interests?
          </div>
          <div className="border-2 border-blue-500 rounded-md flex flex-wrap p-2  my-4">
            {userInterests.map((interest, index) => (
              <div
                className={
                  "border-2 rounded-full w-fit p-2 m-2 flex items-center" +
                  (items.includes(interest) ? " bg-blue-400" : "")
                }
                key={index}
                onClick={() => handleSelect(interest)}
              >
                {interest}
              </div>
            ))}
          </div>

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
      </div>
    </form>
  );
};

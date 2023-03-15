/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  companyRoles,
  questions,
  techStacks,
  userInterests,
  workExperiences,
} from "../../utils/constants";
import Select from "react-select";
import { useController, useForm } from "react-hook-form";
import { updateUserInfo2 } from "../../utils/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PartTwo = ({ user }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control, watch, formState } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      radius: user?.discoverySettings?.radius || "",
      bio: user?.bio | "",
    },
  });
  const { field: workExperience } = useController({
    name: "workExperience",
    defaultValue: "",
    control,
    rules: { required: false },
  });

  const { field: developerRole } = useController({
    name: "role",
    defaultValue: "",
    control,
    rules: { required: false },
  });

  const [interests, setInterests] = useState(user?.interest || []);
  const [techStack, setTechStack] = useState(user?.techStack || []);
  const [questionAnswers, setQuestionAnswers] = useState(
    user?.questionAnswers || []
  );

  const handleAnswerChange = (questionId, answer) => {
    // Find the index of the selected answer in the array
    const index = questionAnswers.findIndex((item) => item.qid === questionId);

    // If the answer is already selected, update the array
    if (index !== -1) {
      setQuestionAnswers([
        ...questionAnswers.slice(0, index),
        {
          qid: questionId,
          answer,
        },
        ...questionAnswers.slice(index + 1),
      ]);
    } else {
      // Otherwise, add a new object to the array
      setQuestionAnswers([
        ...questionAnswers,
        {
          qid: questionId,
          answer,
        },
      ]);
    }
  };

  const handleSelectInterests = (value) => {
    if (!interests.includes(value)) {
      setInterests([...interests, value]);
    } else {
      const newItems = interests.filter((item) => item !== value);
      setInterests(newItems);
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

  const secondStepMutation = useMutation({
    mutationFn: updateUserInfo2,
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const onSubmit = (enteredData, event) => {
    console.log("came here");
    event.preventDefault();

    const transformedFields = {
      company: enteredData.company,
      role: enteredData.role.value,
      workExperience: `${enteredData.workExperience.value}`,
      QuestionAnswers: questionAnswers,
      techStack,
      interest: interests,
    };

    secondStepMutation.mutate(transformedFields);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2">
          <div className="flex flex-col">
            <label className="font-semibold">Where do you work?</label>
            <input
              placeholder="Where do you work?"
              className="border-2 p-2 my-2"
              type="text"
              {...register("company", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold my-2">Select your Experience</label>
            <Select
              {...workExperience}
              placeholder="Select your Experience"
              options={workExperiences}
            />
          </div>

          <div className="flex flex-col my-2 mb-4">
            <label className="font-semibold mb-2">
              What is your role in your company?
            </label>

            <Select
              {...developerRole}
              placeholder="role in your company"
              options={companyRoles}
            />
          </div>
          <div className="font-semibold text-lg">
            Select your favorite Tech Stack?
          </div>
          <p className="text-slate-400 text-sm">Select atleast 3 values</p>
          <div className="rounded-md flex flex-wrap my-4 gap-1">
            {techStacks.map((Stack, index) => (
              <div
                className={
                  "border-2 rounded-full w-fit p-1 px-2 m-1 flex items-center text-sm" +
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
          <p className="text-slate-400 text-sm">Select atleast 3 values</p>
          <div className="flex flex-wrap  my-4">
            {userInterests.map((interest, index) => (
              <div
                className={
                  "border-2 rounded-full w-fit p-1 px-2 m-1 flex items-center text-sm" +
                  (interests.includes(interest) ? " bg-blue-400" : "")
                }
                key={index}
                onClick={() => handleSelectInterests(interest)}
              >
                {interest}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <div className="font-medium text-xl">
              Answer the following questions
            </div>
            <p className="text-slate-400 text-sm">
              Better know your personality test
            </p>
          </div>
          <div className="mx-2">
            {questions.map((question) => (
              <div key={question.id}>
                <div className="font-semibold">{question.name}</div>
                <div className="flex justify-between items-center my-2">
                  {question.answers.map((answer) => (
                    <div key={answer}>
                      <input
                        required
                        className="mr-2"
                        type="radio"
                        id={`${question.id}-${answer}`}
                        name={`${question.id}`}
                        value={answer}
                        onChange={() => handleAnswerChange(question.id, answer)}
                        checked={
                          questionAnswers.find(
                            (item) => item.qid === question.id
                          )?.answer === answer
                        }
                      />
                      <label htmlFor={`${question.id}-${answer}`}>
                        {answer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="text-center py-2 bg-blue-700 w-80 text-white rounded-md border-none text-xl mt-4">
            Star Swiping
          </button>
        </div>
      </form>
    </div>
  );
};

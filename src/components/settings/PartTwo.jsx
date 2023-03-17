/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";
import * as z from "zod";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import {
  companyRoles,
  questions,
  techStacks,
  userInterests,
  workExperiences,
} from "../../utils/constants";

// eslint-disable-next-line react/prop-types
export const PartTwo = ({ user, secondStepMutation }) => {
  const schema = z.object({
    company: z.string(),
    // profilePhot
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {},
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

  const onSubmit = (enteredData, event) => {
    event.preventDefault();

    const transformedFields = {
      company: enteredData.company,
      role: developerRole.value.value,
      workExperience: `${workExperience.value.value}`,
      questionAnswers: questionAnswers,
      techStack,
      interest: interests,
    };

    secondStepMutation.mutate(transformedFields);
  };

  console.log(errors);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2">
          <div className="flex flex-col">
            <label className="font-semibold">Where do you work?</label>
            <input
              placeholder="Where do you work?"
              className="border-2 p-2 mt-2"
              type="text"
              {...register("company", { required: false })}
            />
            {errors.company?.message && (
              <p className="text-red-400 mb-1">{errors.company?.message}</p>
            )}
          </div>
          <div className="flex flex-col my-4">
            <label className="font-semibold mb-2">Select your experience</label>
            <Select
              {...workExperience}
              placeholder="Select your Experience"
              options={workExperiences}
            />
          </div>

          <div className="flex flex-col my-4">
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
            Select your favorite tech stack?
          </div>
          <p className="text-slate-400 text-sm">Select atleast 3 values</p>
          <div className="rounded-md flex flex-wrap my-4 gap-1">
            {techStacks.map((Stack, index) => (
              <div
                className={
                  "border-2 rounded-full w-fit p-1 px-2 m-1 flex items-center text-sm hover:cursor-pointer" +
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
                  "border-2 rounded-full w-fit p-1 px-2 m-1 flex items-center text-sm hover:cursor-pointer" +
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
              Answer the following questions?
            </div>
            <p className="text-slate-400 text-sm mt-1">
              Better know your personality test
            </p>
          </div>
          <div className="mx-2">
            {questions.map((question) => (
              <div key={question.id}>
                <div className="font-semibold">{question.name}</div>
                <div className="flex justify-between items-center my-2">
                  {question.answers.map((answer) => (
                    <div
                      key={answer}
                      className="flex items-center justify-between"
                    >
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
          <button className="text-center py-2 bg-blue-700 w-full text-white rounded-md border-none text-xl mt-4 hover:cursor-pointer hover:bg-blue-900">
            Star Swiping
          </button>
        </div>
      </form>
    </div>
  );
};

/* eslint-disable react/prop-types */
import React from "react";
import {
  companyRoles,
  questions,
  techStacks,
  userInterests,
  workExperiences,
} from "../../utils/constants";
import Select from "react-select";

// eslint-disable-next-line react/prop-types
export const PartTwo = ({
  register,
  workExperience,
  developerRole,
  techStack,
  interests,
  handleAnswerChange,
  handleSelectInterests,
  handleTechStack,
  questionAnswers,
}) => {
  return (
    <div className="w-full">
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
        <div className="font-semibold text-lg    ">Select your Interests?</div>
        <p className="text-slate-400 text-sm">Select atleast 3 values</p>
        <div className="border-2 border-blue-500 rounded-md flex flex-wrap p-2  my-4">
          {userInterests.map((interest, index) => (
            <div
              className={
                "border-2 rounded-full w-fit p-2 m-2 flex items-center" +
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
        <div>
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
                        questionAnswers.find((item) => item.qid === question.id)
                          ?.answer === answer
                      }
                    />
                    <label htmlFor={`${question.id}-${answer}`}>{answer}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

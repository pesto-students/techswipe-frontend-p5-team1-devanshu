import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Matches } from "./Matches";

export const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log({ selectedIndex });
  return (
    <div>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-around">
          <Tab
            className={`${
              selectedIndex === 0 && "underline text-blue-400 outline-none  "
            }`}
          >
            Matches
          </Tab>
          <Tab
            className={`${
              selectedIndex === 1 && "underline text-blue-400 outline-none"
            }`}
          >
            Messages
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Matches />
          </Tab.Panel>
          <Tab.Panel>messages</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

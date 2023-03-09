import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Matches } from "./Matches";
import { Messages } from "./Messages";

export const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-around p-2">
          <Tab
            className={`${
              selectedIndex === 0 &&
              "underline decoration-blue-400 decoration-4	outline-none  "
            }`}
          >
            Matches
          </Tab>
          <Tab
            className={`${
              selectedIndex === 1 &&
              "underline  decoration-blue-400 decoration-4	outline-none"
            }`}
          >
            Messages
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Matches />
          </Tab.Panel>
          <Tab.Panel>
            <Messages />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

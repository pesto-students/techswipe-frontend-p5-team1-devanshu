import React, { useState } from "react";
import { Tab } from "@headlessui/react";
// import { Matches } from "./";
import { MessagesComponent } from "./Messages";
import { MatchesComponent } from "./Matches";

export const Sidebar = ({ socket }) => {
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
            <MatchesComponent setSelectedIndex={setSelectedIndex} />
          </Tab.Panel>
          <Tab.Panel>
            <MessagesComponent
              socket={socket}
              setSelectedIndex={setSelectedIndex}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

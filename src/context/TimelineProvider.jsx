import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEvent = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type,
      name: friendName,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newEvent, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;
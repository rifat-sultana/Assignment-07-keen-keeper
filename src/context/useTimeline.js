// import { useTimeline } from "../context/useTimeline";

import { useContext } from "react";
import { TimelineContext } from "./TimelineContext";

export const useTimeline = () => {
    return useContext(TimelineContext);
} 
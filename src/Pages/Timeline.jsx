

import { useTimeline } from "../context/useTimeline";
import { useState } from "react";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filterType, setFilterType] = useState("All");

  const filteredTimeline =
    filterType === "All"
      ? timeline
      : timeline.filter((item) => item.type === filterType);

  return (
    <div  className="max-w-3xl mx-auto mt-10 px-4">

      <h2 className="text-3xl font-bold mb-4"> Timeline </h2>

      <select 
       value={filterType}
        onChange={(e) => setFilterType(e.target.value)}

        className="border px-3 py-2 rounded mb-6">

        <option>Filter timeline</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

       {filteredTimeline.length === 0 && <p>No data found</p>}


      {filteredTimeline.map((item) => (
        <div key={item.id} className=" shadow-lg p-3 my-2 rounded">

          <p  className="flex items-center gap-2">
            {item.type === "Call" && <BiPhoneCall ize={18} />}
            {item.type === "Text" && <MdOutlineTextsms size={18}/>}
            {item.type === "Video" && <IoVideocam  size={18}/>}

            <span> 
             {item.type} with <b>{item.name}</b>
             </span>
          </p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;


import { useTimeline } from "../context/useTimeline";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Timeline = () => {
  const { timeline } = useTimeline();

  return (
    <div>
      <h2>Timeline</h2>

      {timeline.map((item) => (
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
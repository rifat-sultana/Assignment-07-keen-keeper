import { useTimeline } from "../../context/useTimeline";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();

  // 🔥 count logic
  const callCount = timeline.filter(item => item.type === "Call").length;
  const textCount = timeline.filter(item => item.type === "Text").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  // 🔥 chart data
  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#7C3AED", "#10B981", "#064E3B"];

  return (
    
    <div className="max-w-5xl mx-auto mt-10">

  <h2 className="text-4xl font-bold text-center mb-10">
    Friendship Analytics
  </h2>


  <div className="bg-white p-10 rounded-xl shadow-lg">

  
    <p className="text-sm text-gray-800 font-bold mb-4">
      By Interaction Type
    </p>

   
    <div className="flex justify-center">

     
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

    </div>
  </div>

</div>
  );
};

export default Stats;
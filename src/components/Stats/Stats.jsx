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

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Friendship Analytics
      </h2>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
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
  );
};

export default Stats;
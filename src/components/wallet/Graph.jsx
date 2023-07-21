import { AreaChart, Area, ResponsiveContainer } from "recharts";

const Graph = () => {
  return (
    <div className="Graph">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 40,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#ff8f17"
            fill="#fff7ee"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>

      <p className="Tag">
        <span className="Mark"></span>1BTC = $5.483
      </p>
    </div>
  );
};

export default Graph;

const data = [
  {
    name: "Page A",
    uv: 1500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1700,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

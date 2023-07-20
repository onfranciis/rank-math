import { useState } from "react";

const Tab = () => {
  const [selected, setSelected] = useState("Day");

  return (
    <div className="Tab">
      {Timeline.map((time) => (
        <button
          key={time.period}
          className={selected == time.period ? "Selected" : "Period"}
          onClick={() => setSelected(time.period)}
        >
          {time.period}
        </button>
      ))}
    </div>
  );
};

export default Tab;

const Timeline = [
  {
    period: "Day",
  },
  {
    period: "Week",
  },
  {
    period: "Month",
  },
  {
    period: "Year",
  },
];

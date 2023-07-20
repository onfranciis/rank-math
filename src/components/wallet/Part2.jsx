import Graph from "./Graph";
import Tab from "./Tab";

const Part2 = () => {
  return (
    <div className="Part2">
      <Tab />

      <div className="Card">
        <div className="Top">
          <p className="Tag">
            {" "}
            <span className="Lower"></span>Lower: $4.895
          </p>

          <p className="Tag">
            {" "}
            <span className="Higher"></span>Higher: $6.857
          </p>
        </div>
      </div>

      <Graph />
    </div>
  );
};

export default Part2;

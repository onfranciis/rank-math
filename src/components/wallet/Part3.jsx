import { FaDollarSign } from "react-icons/fa";

const Part3 = () => {
  return (
    <div className="Part3">
      <button>
        <div className="Coin Buy">
          <FaDollarSign className="Icon" />
        </div>
        <p>Buy BTC</p>
      </button>

      <button>
        <div className="Coin Sell">
          <FaDollarSign className="Icon" />
        </div>
        <p>Sell BTC</p>
      </button>
    </div>
  );
};

export default Part3;

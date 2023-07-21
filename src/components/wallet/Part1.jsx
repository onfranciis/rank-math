import { useState } from "react";
import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsCurrencyBitcoin,
} from "react-icons/bs";

const Part1 = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="Part1">
      <div className="Top">
        <div className="Left">
          <div className="Coin">
            <BsCurrencyBitcoin className="Icon" />
          </div>

          <p className="Currency">Bitcoin</p>
        </div>

        <p className="SubCurrency">BTC</p>
      </div>

      <p className="Body">3.529020 BTC</p>

      <div className="Bottom">
        <p className="Price">$19.153 USD</p>

        <p className="Percentage">-2.32%</p>
      </div>

      <div className="Extra" style={{ display: dropdown ? "flex" : "none" }}>
        <button className="Buy" title="Buy">
          Buy
        </button>

        <button className="Sell" title="Sell">
          Sell
        </button>
      </div>

      <button className="Toggle" onClick={() => setDropdown(!dropdown)}>
        {dropdown ? (
          <BsChevronCompactUp className="Arrow" />
        ) : (
          <BsChevronCompactDown className="Arrow" />
        )}
      </button>
    </div>
  );
};

export default Part1;

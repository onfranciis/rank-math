import { useState } from "react";
import "./Menu.css";
import { BsChevronLeft } from "react-icons/bs";
import { PiNote } from "react-icons/pi";
import { IoMdMore, IoIosRemoveCircleOutline } from "react-icons/io";
import { CgScan } from "react-icons/cg";
import { TfiUpload } from "react-icons/tfi";

const Menu = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <>
      <div className="Menu">
        <button title="Back">
          <BsChevronLeft className="Icon" />
        </button>

        <p>Bitcoin Wallet</p>

        <button
          className={`Icon More ${toggled ? "Selected" : ""}`}
          onClick={() => setToggled(!toggled)}
        >
          <IoMdMore />

          {toggled && (
            <div className="PopUp">
              {MenuOptions.map((option) => (
                <button
                  key={option.title}
                  title={option.title}
                  className={option.title}
                >
                  {option.title} {option.icon({ className: `${option.title}` })}
                </button>
              ))}
            </div>
          )}
        </button>

        <div
          className="PopUpCover"
          onClick={() => setToggled(false)}
          style={{ display: toggled ? "block" : "none" }}
        ></div>
      </div>
    </>
  );
};

export default Menu;

const MenuOptions = [
  {
    title: "Edit",
    icon: CgScan,
  },
  {
    title: "Courier Info",
    icon: PiNote,
  },
  {
    title: "Share",
    icon: TfiUpload,
  },
  {
    title: "Remove",
    icon: IoIosRemoveCircleOutline,
  },
];

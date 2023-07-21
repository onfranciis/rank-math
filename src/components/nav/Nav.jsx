import "./Nav.css";
import { FaWallet } from "react-icons/fa";
import { IoMdCompass, IoIosNotifications } from "react-icons/io";
import { TbSettingsFilled } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const Nav = ({ setSelected, selected }) => {
  return (
    <div className="Nav">
      {NavLinks.map((link) => (
        <button
          key={link.name}
          title={link.name}
          onClick={() => setSelected(link.name)}
        >
          {link.icon({
            className: `NavLink ${selected == link.name ? "SelectedNav" : ""}`,
            size: link.size ?? "",
          })}
        </button>
      ))}
    </div>
  );
};

export default Nav;

const NavLinks = [
  {
    icon: FaWallet,
    name: "Wallet",
    size: 47,
  },
  {
    icon: IoMdCompass,
    name: "Guide",
  },
  {
    icon: IoIosNotifications,
    name: "Notifications",
  },
  {
    icon: TbSettingsFilled,
    name: "Settings",
  },
];

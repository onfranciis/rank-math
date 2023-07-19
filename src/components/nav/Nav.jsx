import { FaWallet } from "react-icons/fa";
import { IoMdCompass, IoIosNotifications } from "react-icons/io";
import { TbSettingsFilled } from "react-icons/tb";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      {NavLinks.map((link) => (
        <button key={link.name} title={link.name}>
          {link.icon({ className: "NavLink", size: link.size ?? "" })}
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

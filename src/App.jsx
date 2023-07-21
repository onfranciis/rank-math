import "./App.css";
import Menu from "./components/menu/Menu";
import Nav from "./components/nav/Nav";
import Wallet from "./components/wallet/Wallet";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Wallet");

  return (
    <div className="App">
      <Menu />
      {selected == "Wallet" && <Wallet />}
      <Nav setSelected={setSelected} selected={selected} />
    </div>
  );
}

export default App;

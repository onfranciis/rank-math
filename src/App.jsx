import "./App.css";
import Menu from "./components/menu/Menu";
import Nav from "./components/nav/Nav";
import Wallet from "./components/wallet/Wallet";

function App() {
  return (
    <div className="App">
      <Menu />
      <Wallet />
      <Nav />
    </div>
  );
}

export default App;

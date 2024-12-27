// import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Menu from "../src/components/Menu";
import SearchMenu from "../src/components/SearchMenu";
// import ShopCard from "./components/ShopCard";
// import Carusel from "../src/components/Carusel";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Link to="/shop">Our Shop</Link>
      <SearchMenu />
      {/* <ShopCard /> */}
      {/* <Carusel /> */}
    </>
  );
}

export default App;

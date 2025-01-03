import React from "react";
// import { Carousel } from "@material-tailwind/react";
import "../index.css";
import Logo from "../assets/images2.png";
import { Link } from "react-router-dom";
import ShopCard from "./ShopCard";
const MenuList = [
  { id: 1, title: "The CLUB", url: "#" },
  { id: 2, title: "New products", url: "#" },
  { id: 3, title: "Authors", url: "#" },
  { id: 4, title: "Видавництва", url: "#" },
  { id: 5, title: "TOP books", url: "#" },
  { id: 7, title: "Sign Up", url: "#" },
  { id: 8, title: "Blog", url: "#" },
  { id: 9, title: "Shops and contacts", url: "#" },
  { id: 10, title: "Delivery and payment", url: "#" },
];
const PhoneContact = ["Online shop", "(0800) 33-05-66", "(044) 333-42-20"];
const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <ul className="ListItemsDisplay">
        {MenuList.map((item) => (
          <li className="ItemsStylesList" key={item.id}>
            {item.title}
          </li>
        ))}
        <li
          className="ItemsStylesList"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}>
          Your cart
        </li>
      </ul>
      <div className="LogoAndInformation">
        <div className="Logo">
          <img src={Logo} height={"70px"} alt="" />
        </div>
        <div className="PhoneInformation">
          <ul className="UlContactList">
            {PhoneContact.map((contacts, index) => (
              <li key={index} className="ContactItemList">
                {contacts}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <ShopCard close={setIsOpen} />}
    </div>
  );
};

export default Menu;

import React from "react";
// import { Carousel } from "@material-tailwind/react";
import "../index.css";
import Logo from "../assets/images2.png";
const MenuList = [
  "The CLUB",
  "New products",
  "Authors",
  "Видавництва",
  "TOP books",
  "Pre-sales",
  "Promotions",
  "Blog",
  "Shops and contacts",
  "Delivery and payment",
];
const PhoneContact = ["Online shop", "(0800) 33-05-66", "(044) 333-42-20"];
const Menu = () => {
  return (
    <div>
      <ul className="ListItemsDisplay">
        {MenuList.map((item, index) => (
          <li className="ItemsStylesList" key={index}>
            {item}
          </li>
        ))}
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
    </div>
  );
};

export default Menu;

import React from "react";
// import { Books } from "./Date";
// import { add } from "./ShopCard";
import "../index.css";
// import { handelArlet } from './AddLogic';
const BookCard = ({ Books, add }) => {
  return (
    <li className="BookCard" style={{ width: "30%" }}>
      <h1>Book title: {Books.bookName}</h1>
      <h4>Id: {Books.id}</h4>
      <h4>Genre : {Books.genre}</h4>
      <h5>Cost: {Books.cost}</h5>
      <button onClick={() => add(Books)}>Add Item</button>
      <div className="images">
        <img src={Books.img} height={"150px"} alt="Book Imagews" />
      </div>
    </li>
  );
};

export default BookCard;

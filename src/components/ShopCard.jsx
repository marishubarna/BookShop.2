import React, { useState } from "react";
import { Books } from "./Date";

const ShopCard = () => {
  const [pickedBooks, setPickedBooks] = useState([]);

  const addFunction = (book) => {
    setPickedBooks([...pickedBooks, book]);
  };

  const minus = () => {
    setPickedBooks(pickedBooks.slice(0, -1));
  };

  const reset = () => {
    setPickedBooks([]);
  };

  // const handelArlet = () => {
  //   if (pickedBooks.length > 0) {
  //     alert("In your Cart: " + pickedBooks.map((items) => items.bookName).join(", "));
  //   }
  // };

  return (
    <div>
      <div className="ShopListDiv">
        <h1>Picked books: {pickedBooks.length}</h1>
        <div className="pickedCostTitle">
          {pickedBooks.map((book, index) => (
            <h2 key={index} className="TitleShopBook">
              {book.bookName}
            </h2>
          ))}
        </div>
        <div className="buttons">
          <button onClick={() => addFunction(Books[0])}>+</button>{" "}
          <button onClick={minus}>-</button>
          <button onClick={reset}>Cancel All</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

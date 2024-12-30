import React from "react";
import { Books } from "./Date";
import { useStore } from "../store/storeZustan";

const ShopCard = () => {
  // const [pickedBooks, setPickedBooks] = useState([]);
  const { cart, MoresBook, LessBook, removeBooks, addBook } = useStore(
    (state) => ({
      cart: state.cart,
      addBook: state.addBook,
      MoresBook: state.MoresBook,
      LessBook: state.LessBook,
      removeBooks: state.removeBooks,
    })
  );

  // const addFunction = (book) => {
  //   setPickedBooks([...pickedBooks, book]);
  // };

  // const minus = () => {
  //   setPickedBooks(pickedBooks.slice(0, -1));
  // };

  // const reset = () => {
  //   setPickedBooks([]);
  // };

  // const handelArlet = () => {
  //   if (pickedBooks.length > 0) {
  //     alert(
  //       "In your Cart: " + pickedBooks.map((items) => items.bookName).join(", ")
  //     );
  //   }
  // };

  return (
    <div>
      <div className="ShopListDiv">
        <h1>Picked books: {cart.length}</h1>
        <div className="pickedCostTitle">
          {cart.map((book, index) => (
            <h2 key={index} className="TitleShopBook">
              {book.bookName} (Quantity: {book.quantity})
            </h2>
          ))}
        </div>
        <div className="buttons">
          {cart.length > 0 && (
            <>
              <button onClick={() => MoresBook(cart[0].id)}>+</button>
              <button onClick={() => LessBook(cart[0].id)}>-</button>
              <button onClick={() => removeBooks(cart[0].id)}>Remove</button>
            </>
          )}
        </div>
        <div className="AddBook">
          <button onClick={() => addBook(Books[0])}>Add Book</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

import React from "react";
import { useStore } from "../store/storeZustan";

const ShopCard = ({ close }) => {
  const cart = useStore((state) => state.cart);
  const removeBooks = useStore((state) => state.removeBooks);
  const moresBook = useStore((state) => state.MoresBook);
  const lessBook = useStore((state) => state.LessBook);

  return (
    <form
      style={{
        position: "absolute",
        top: 15,
        right: 155,
        padding: "36px 20px",
        backgroundColor: "#f5f4f0",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
      <button
        type="button"
        onClick={() => close(false)}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "transparent",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.color = "red")}
        onMouseLeave={(e) => (e.target.style.color = "black")}>
        &times;
      </button>
      <h6 style={{ textAlign: "center" }}>Picked books: {cart.length}</h6>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}>
        {cart.map((book, index) => (
          <li
            key={index}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}>
            <p>
              {book.bookName} (Quantity: {book.quantity})
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {cart.length > 0 && (
                <>
                  <button
                    type="button"
                    style={{
                      margin: "10px",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => moresBook(book.id)}>
                    +
                  </button>
                  <button
                    type="button"
                    style={{
                      margin: "10px",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => lessBook(book.id)}>
                    -
                  </button>
                  <button
                    type="button"
                    style={{
                      margin: "10px",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => removeBooks(book.id)}>
                    Remove
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}>
          Buy Book
        </button>
      </div>
    </form>
  );
};

export default ShopCard;

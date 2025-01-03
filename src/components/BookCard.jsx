import React from "react";
import "../index.css";
import { useStore } from "../store/storeZustan";

const BookCard = ({ Books }) => {
  const addNewBook = useStore((state) => state.addBook);
  return (
    <li
      className="BookCard"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "256px",
        margin: "10px",
        padding: "25px 5px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
      <div className="images">
        <img
          src={Books.img}
          height={"150px"}
          alt="Book Images"
          style={{ objectFit: "contain", marginBottom: "10px" }}
        />
      </div>
      <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "10px" }}>
        {Books.bookName}
      </h1>
      <p style={{ marginBottom: "10px" }}>Genre : {Books.genre}</p>
      <p style={{ marginBottom: "10px" }}>Cost: {Books.cost}</p>
      <button
        onClick={() => addNewBook(Books)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}>
        Add Item
      </button>
    </li>
  );
};

export default BookCard;

import React from "react";
import { useState } from "react";
import "../index.css";
import BookCard from "./BookCard";
// import Carusel from "../components/Carusel.jsx";
import { Books } from "./Date";
// import { addFunction } from "./ShopCard";
// import { handelArlet } from "./AddLogic";
const SectionOfBooks = [
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
const SearchMenu = ({ addFunction, handelArlet }) => {
  const [dane, setDane] = useState(Books);
  const [isActive, setIsActive] = useState(false);

  const BooksSearchHandel = (query) => {
    const BooksCopy = [...Books];
    setDane((prev) =>
      BooksCopy.filter((book) => book.bookName.includes(query))
    );
  };

  const filterBooks200 = (cost) => {
    setDane(Books.filter((book) => book.cost > 100));
  };

  const filterBooksFantastick = (genre) => {
    setDane(Books.filter((book) => book.genre === "fantastic"));
  };

  const filterBooks1000 = (cost) => {
    setDane(Books.filter((book) => book.cost > 800));
  };

  return (
    <div className="">
      <div className="Search-div-display">
        <div className="Select">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Каталог Товарів
            </option>
            {SectionOfBooks.map((book, index) => (
              <option key={index}>{book}</option>
            ))}
          </select>
        </div>
        {/* CheckBox */}
        <div className="checkbox">
          <div className="CheckBoxText-CheckBox">
            <input
              className="chexboxStyle"
              onClick={filterBooks200}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="">200$</label>
          </div>
          <div className="CheckBoxText-CheckBox">
            <input
              className="chexboxStyle"
              onClick={filterBooksFantastick}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="">Fantastic</label>
          </div>
          <div className="CheckBoxText-CheckBox">
            <input
              className="chexboxStyle"
              onClick={filterBooks1000}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="">500-1000$</label>
          </div>
        </div>
        {/* CheckBox */}
        {/*Search Input */}
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            id="searchInput"
            onChange={(e) => BooksSearchHandel(e.target.value)}
            onFocus={() => isActive(true)}
            onBlur={() => isActive(false)}
            placeholder="Search"
            type="search"
            class="input"
          />
        </div>

        {/*Search Input */}
      </div>
      <ul
        className="SearchVisibilyty"
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {dane.map((items) => {
          return (
            <BookCard
              key={items.id}
              Books={items}
              // add={addFunction}
              // alret={handelArlet}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMenu;

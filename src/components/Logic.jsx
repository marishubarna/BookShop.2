import React from "react";
import { useState } from "react";
import { text } from "stream/consumers";
import { Books } from "./Date";
const Logic = () => {
  const [addBook, setAddBook] = useState("");
  const [bookDate, setBookDate] = useState(Books);
  //   const handelAddBook = (e) => {
  //     setAddBook(e.target.value);
  //   };

  //   const HandelChanges = () => {
  //     if (addBook !== "") {
  //       setBookDate([...bookDate, { id: bookDate.length + 1, conplet: false }]);
  //     }
  //   };

  return <div>Logic</div>;
};

export default Logic;

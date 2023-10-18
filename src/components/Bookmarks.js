import { useEffect, useState } from "react";
import { bookList } from "./Deta";

export default function Bookmarks() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const allBookmarks = JSON.parse(localStorage.getItem("fav-books")) ?? [];
  useEffect(() => {
    setFilteredBooks(
      bookList.filter((book) => {
        return allBookmarks.includes(book.ISBN);
      })
    );
  }, [allBookmarks]);
  return (
    <>
      {" "}
      {filteredBooks?.map((book, idx) => (
        <div className="books" key={book.id}>
          <div>
            <h4>Title: {book.title}</h4>
            <h4>Author: {book.Author}</h4>
            <h4>ISBN: {book.ISBN}</h4>
          </div>
          <img src={book.imageUrl} alt="" />
        </div>
      ))}
      ;
    </>
  );
}

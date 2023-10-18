import * as React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import axios from "axios";

const StyledBook = styled.div`
  display: flex;
  margin-top: 5px;
  background-color: #cfe8fc;
  align-items: center;
  padding: 5px 10px;
  box-shadow: 0px 4px 8px rgb(0, 0, 0, 0.25);
`;
const StyledContent = styled.div`
  margin-left: 30px;
  text-align: left;
  h4 {
    margin: 1;
  }
`;
const StyledImage = styled.img`
  width: 70;
  height: 200px;
`;

function ListOfBooks() {
  const { id } = useParams();

  const [bookListFiltered, setBookListFiltered] = useState();
  const navigate = useNavigate();
  async function handleDelete(e, _id) {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to remove?")) {
      try {
        await axios.delete("https://protected-coast-31790-9e0edf0ca4ce.herokuapp.com/api/book/" + _id);
        alert("Deleted");
      } catch (err) {
        alert("Error");
      }
    }
  }
  function handleSortAsc() {
    const books = [...bookListFiltered];
    books.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    setBookListFiltered([...books]);
  }
  function handleSortDec() {
    const books = [...bookListFiltered];
    books.sort((a, b) => (a.title > b.title ? -1 : b.title > a.title ? 1 : 0));

    setBookListFiltered([...books]);
  }
  function handleBookmark(e, isbn) {
    e.stopPropagation();
    let allBookmarks = JSON.parse(localStorage.getItem("fav-books")) ?? [];
    allBookmarks.push(isbn);
    allBookmarks = [...new Set(allBookmarks)];
    localStorage.setItem("fav-books", JSON.stringify(allBookmarks));
  }
  function handleBookmarkRemove(e, isbn) {
    e.stopPropagation();
    let allBookmarks = JSON.parse(localStorage.getItem("fav-books")) ?? [];

    let foundIndex = allBookmarks.findIndex((is) => is === isbn);

    if (foundIndex != -1) {
      allBookmarks.splice(foundIndex, 1);
    }
    localStorage.setItem("fav-books", JSON.stringify(allBookmarks));
  }

  useEffect(() => {
    axios.get(`https://protected-coast-31790-9e0edf0ca4ce.herokuapp.com/api/book/all`).then((response) => {
      setBookListFiltered(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <SearchBar setBookListFiltered={setBookListFiltered} />
      <button onClick={handleSortAsc}>sort A-Z</button>
      <button onClick={handleSortDec}>sort Z-A</button>
      <button
        onClick={() => {
          navigate("/detail", { state: { type: "create" } });
        }}
      >
        Create
      </button>
      <div>
        {bookListFiltered?.map((book, idx) => (
          <StyledBook
            className="books"
            key={book.id}
            onClick={() => {
              navigate("/detail", {
                state: {
                  _id: book._id,
                  isbn: book.isbn,
                  title: book.title,
                  author: book.author,
                  imageUrl: book.imageUrl,
                },
              });
            }}
          >
            <StyledContent>
              <h4>Title: {book.title}</h4>
              <h4>Author: {book.author}</h4>
              <h4>ISBN: {book.isbn}</h4>
            </StyledContent>
            <StyledImage src={book.imageUrl} alt="" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/detail", {
                  state: {
                    type: "edit",
                    _id: book._id,
                    isbn: book.isbn,
                    title: book.title,
                    author: book.author,
                    imageUrl: book.imageUrl,
                  },
                });
              }}
            >
              Edit
            </button>
            <button onClick={(e) => handleDelete(e, book._id)}> Delete </button>
            {JSON.parse(localStorage.getItem("fav-books")).includes(
              book.isbn
            ) ? (
              <button onClick={(e) => handleBookmarkRemove(e, book.isbn)}>
                Remove Favorite
              </button>
            ) : (
              <button onClick={(e) => handleBookmark(e, book.isbn)}>
                Add to Favorite
              </button>
            )}
          </StyledBook>
        ))}
         <p>Mahlet &copy; 2023</p>
      </div>
    </React.Fragment>
   
  );
}
export default ListOfBooks;

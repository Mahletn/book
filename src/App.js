import "./App.css";
import Nav from "./components/Nav";
import { Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ListOfBooks from "./components/ListOfBooks";
import Detail from "./components/Detail";
import { useState, useEffect } from "react";
import Bookmarks from "./components/Bookmarks";
// import SearchBar from "./components/SearchBar";

function App() {
  // const [books, setBooks] = useState([]);
  useEffect(() => {
    // fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
    //   .then((res) => res.json())
    //   .then((data) => setBooks(deta));
  }, []);

  return (
    <>
      <Nav />
      <Toolbar />
      <Routes>
        <Route path="/" element={<ListOfBooks />} />
        <Route path="detail" element={<Detail />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default App;

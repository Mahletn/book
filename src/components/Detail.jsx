import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";

function BookDetil() {
  const { state } = useLocation();
  const { type, isbn, author, title, imageUrl } = state;
  console.log("detail", state);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        {type === "edit" ? (
          <EditBook bookInfo={state} />
        ) : type === "create" ? (
          <CreateBook />
        ) : (
          <>
            Detail Page
            <h4>Title: {title}</h4>
            <h4>Author: {author}</h4>
            <h4>ISBN: {isbn}</h4>
            <img src={imageUrl} alt="" />
          </>
        )}
      </Container>
    </React.Fragment>
  );
}

export default BookDetil;

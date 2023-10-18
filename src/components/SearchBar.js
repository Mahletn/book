import { useState } from "react";
import { bookList } from "./Deta";
import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const StyledInput = Styled.input`
  width: 90%;
  padding: 10px 5px;
  border: none;
  border: 1px solid #333;
  border-radius: 6px;
  margin: 4px;
`;

export default function SearchBar({ setBookListFiltered }) {
  const [search, setSearch] = useState();

  return (
    <>
      <StyledInput type="search" onChange={(e) => setSearch(e.target.value)} />
      <button
        onClick={() => {
          axios
            .get("http://localhost:5000/api/book/" + search)
            .then((res) => {
              setBookListFiltered(res.data);
            })
            .catch(() => {});
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
}

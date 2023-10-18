import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { FormControl } from "@mui/base/FormControl";

const StyledInput = styled.input`
  display: flex;
  width: 70%;
  margin-top: 10px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgb(0, 0, 0, 0.25);
`;

export default function EditBook({ bookInfo }) {
  const [inputs, setInputs] = useState(bookInfo);
  console.log(bookInfo, "-----");
  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.patch(
        "https://protected-coast-31790-9e0edf0ca4ce.herokuapp.com/api/book/" + bookInfo._id,
        inputs
      );
      alert("Updated");
    } catch (e) {
      alert("Error");
    }
  }
  return (
    <div>
      <FormControl>
        <StyledInput
          name="title"
          onChange={handleChange}
          value={inputs.title}
        />
        <StyledInput
          name="author"
          onChange={handleChange}
          value={inputs.author}
        />
        <StyledInput name="isbn" onChange={handleChange} value={inputs.isbn} />
        <StyledInput
          name="imageUrl"
          onChange={handleChange}
          value={inputs.imageUrl}
        />
      </FormControl>
      <button onClick={handleSubmit} type="submit">
        Save
      </button>
      <button type="reset">Clear</button>
    </div>
  );
}

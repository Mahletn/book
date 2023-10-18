import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { FormControl } from "@mui/base/FormControl";
import { Form } from "react-router-dom";

const StyledInput = styled.input`
  display: flex;
  width: 70%;
  margin-top: 10px;
  align-items: center;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 4px 8px rgb(0, 0, 0, 0.25);
`;

export default function CreateBook() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(inputs);

    try {
      await axios.post("http://localhost:5000/api/book/create", inputs);
      alert("Saved");
    } catch (e) {
      alert("Error");
    }
  }
  return (
    <div>
      <form>
        <StyledInput placeholder="Title" name="title" onChange={handleChange} />
        <StyledInput
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />
        <StyledInput placeholder="ISBN" name="isbn" onChange={handleChange} />
        <StyledInput
          placeholder="Image"
          name="imageUrl"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Save</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
}

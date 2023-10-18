import axios from "axios";
import { useState } from "react";
import styled from "styled-components";


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
      await axios.post("https://protected-coast-31790-9e0edf0ca4ce.herokuapp.com/api/book/create", inputs);
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

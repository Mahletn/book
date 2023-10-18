import React from "react";
// import "./Container.css";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  background-color: #F0FFFF;
  margin: 0 auto;
  display: flex;
  height:100vh;
  padding: 4px 2px;
  gap: 10px;
`;

function Container({ children }) {
  return <StyledContainer> {children}</StyledContainer>;
}

export default Container;
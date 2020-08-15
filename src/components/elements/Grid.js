import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid"; // get styles from StyledGrid

// receive props
// children will access child components nested
// inside grid component all in Home.js
const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

export default Grid;

import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "../styles/StyledGrid"; // get styles from StyledGrid

// receive props
// children will access child components nested
// inside grid component all in Home.js
function Grid({ header, children }) {
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
}

// validate proptypes
Grid.propTypes = {
  header: PropTypes.string
};

export default Grid;

// es6 way:
// const Grid = ({ header, children }) => (
//   <StyledGrid>
//     <h1>{header}</h1>
//     <StyledGridContent>{children}</StyledGridContent>
//   </StyledGrid>
// );

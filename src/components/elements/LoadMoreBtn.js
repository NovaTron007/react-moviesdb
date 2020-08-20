import React from "react";
import PropTypes from "prop-types";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

// receive and destructure props
const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

// validate proptypes
LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
};

export default LoadMoreBtn;

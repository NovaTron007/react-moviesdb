import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

// receive and destructure props
const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

export default LoadMoreBtn;

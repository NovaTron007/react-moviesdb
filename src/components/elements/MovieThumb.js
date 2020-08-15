import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb"; // import styled component

// receive props from Home.js
const MovieThumb = ({ image, movieId, clickable }) => <StyledMovieThumb>{clickable ? <img className="clickable" src={image} alt="moviethumb" /> : <img src={image} alt="moviethumb" />}</StyledMovieThumb>;

export default MovieThumb;

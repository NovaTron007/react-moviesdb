import React from "react";

import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import MovieThumb from "./MovieThumb";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";

function MovieInfo({ movie }) {
  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          {/* show movie thumbnail */}
          <MovieThumb image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} clickable="false"></MovieThumb>
        </div>
        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT:</h3>
          <p>{movie.overview}</p>

          <div className="rating-director">
            <div>
              <h3>IMDB Rating</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "s" : ""}</h3>
              {/* loop directors array */}
              {movie.directors.map(item => (
                <p key={item.credit_id}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
}

export default MovieInfo;
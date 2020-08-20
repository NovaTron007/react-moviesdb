// Movie.js similar to home, controls other components for single movie page

import React from "react";

// components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

//import custom hook for movie
import { useMovieFetch } from "./hooks/useMovieFetch";

// SINGLE MOVIE page/component
// receive id from MovieThumb.js and destructure props
const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);

  console.log(movie);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header="Actors">
        {movie.actors.map(actor => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export default Movie;

import React, { useState } from "react";

// import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

// custom hooks
import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [
    {
      // destructure, state 2nd level destructure
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();

  const [searchTerm, setSearchTerm] = useState(""); // search state

  const loadMoreMovies = () => {
    // condition for endpoint
    // send either endpoint depending on contents of url
    // set params for api: search or popular endpoints
    const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
    const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndPoint : popularEndPoint;

    // pass endpoint to fetchMovies in custom hook
    fetchMovies(endpoint);
  };
  console.log(movies);

  if (error) return <div>An error occurred!</div>;
  if (!movies[0]) return <Spinner />;

  // pass props to components
  return (
    <>
      <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`} title={heroImage.original_title} text={heroImage.overview} />
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb key={movie.id} clickable image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} movieId={movie.id} movieName={movie.original_title} />
        ))}
      </Grid>

      {/* if loading show spinner component */}
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && <LoadMoreBtn text="load more" callback={loadMoreMovies} />}
    </>
  );
};
export default Home;

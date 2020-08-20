import React, { useState } from "react";

// import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import { POPULAR_BASE_URL, SEARCH_BASE_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

// custom hooks
import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // search state

  const [
    {
      // destructure, state 2nd level destructure
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch(searchTerm); // send searchTerm to useHomeFetch for storage

  // SEARCHMOVIES: if have search term, use search api url, or use popular
  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  // LOADMORE MOVIES: conditions for endpoint
  const loadMoreMovies = () => {
    const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`; // set params for api: search or popular endpoints
    const popularEndPoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    // send either endpoint depending on contents of url
    const endpoint = searchTerm ? searchEndPoint : popularEndPoint;

    // pass endpoint to fetchMovies in custom hook
    fetchMovies(endpoint);
  };
  console.log(movies);

  // error handling
  if (error) return <div>An error occurred!</div>;
  if (!movies[0]) return <Spinner />;

  // pass props to components
  return (
    <>
      {!searchTerm && <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`} title={heroImage.original_title} text={heroImage.overview} />}
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          // will show movie MovieThumb when clicked
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

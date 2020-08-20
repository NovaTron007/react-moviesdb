import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

// custom hook
export const useHomeFetch = searchTerm => {
  // set state
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    // set states
    setError(false);
    setLoading(true);

    // Check endpoints: is search has 'page' in it's url
    const isLoadMore = endpoint.search("page");

    try {
      // use js built in fetch: await fetch, await parse to json
      const result = await (await fetch(endpoint)).json();
      setState(prev =>
        // object
        ({
          ...prev, // spread to copy old state
          movies:
            isLoadMore !== -1
              ? [...prev.movies, ...result.results] // append prev array with new results
              : [...result.results], // else show current results from initial state
          heroImage: prev.heroImage || result.results[0], // if have hero, otherwise get first image in results for the hero image
          currentPage: result.page,
          totalPages: result.total_pages
        })
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  // useEffect: run on render and get movies
  useEffect(() => {
    if (sessionStorage.homeState) {
      console.log("Grabbing from session storage...");
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      console.log("Grabbing from API...");
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []); // dependency if any, run once on mount

  // localStorage
  useEffect(() => {
    // get storage if none set
    if (!searchTerm) {
      console.log("Writing to sessionStorage...");
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return [{ state, loading, error }, fetchMovies]; // for use inside home component
};

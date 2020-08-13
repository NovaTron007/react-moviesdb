import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

// custom hook
export const useHomeFetch = () => {
  // set state
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      // process json data from results.results
      setState(prev =>
        // object
        ({
          ...prev, // spread to copy old state
          movies: [...result.results], //modify the properities
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

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []); // dependency if any, run once on mount

  return [{ state, loading, error }, fetchMovies]; // for use inside home component
};

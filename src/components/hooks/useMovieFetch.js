import { useState, useEffect, useCallback } from "react"; //useCallback to stop infinite loop
import { API_URL, API_KEY } from "../../config";

// receive props from Home.js: movieId, pass into fetch to get movie details
export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //get movie data from api using Fetch
  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      // 1. get movie data by passing in id of movie
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      // 2. Get credits from movie
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      console.log(creditsResult);
      // 3. Getting director from crew array with job as key:
      const directors = creditsResult.crew.filter(item => item.job === "Director");
      setState({
        ...result,
        actors: creditsResult.cast,
        directors
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]); // dependency: watch and only run again if movieId changes.

  // run on render: get movie data using fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // return used for custom hook
  return [state, loading, error];
};

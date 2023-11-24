import React, { useEffect } from "react";
import { useFavMoviesContext } from "../state";
import { loadInitialFavorites, loadMovies } from "../state/actions";
import MoviesList from "../components/MoviesList";

export default function MoviesScreen() {
  const { state, dispatch } = useFavMoviesContext();

  // TODO: handle paginition with infinite scroll
  
  useEffect(() => {
    const bootstrap = async () => {
      await loadMovies(dispatch, state);
      await loadInitialFavorites(dispatch);
    };
    bootstrap();
  }, []);

  return (
    <MoviesList data={state.movies.data} error={state.movies.error} loaded={state.movies.loaded} errorText={state.movies.lastErrorMessage} />
  );
}

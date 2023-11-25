import React, { useEffect } from "react";
import { useFavMoviesContext } from "../state";
import { loadInitialFavorites, loadMoviesPage, loadNextPage } from "../state/actions";
import MoviesList from "../components/MoviesList";
import { MoviesListPage } from "../state/favmovie.types";

export default function MoviesScreen() {
  const { state, dispatch } = useFavMoviesContext();

  useEffect(() => {
    const bootstrap = async () => {
      await loadInitialFavorites(dispatch);
    };
    bootstrap();
  }, []);

  useEffect(() => {
    const loadMovies = async (page: MoviesListPage) => {
      await loadMoviesPage(dispatch, state, page);
    };
    loadMovies(state.movies.pageRequested);
  }, [state.movies.pageRequested]);

  return (
    <MoviesList
      data={Object.values(state.movies.data)}
      error={state.movies.error}
      loaded={state.movies.loaded}
      errorText={state.movies.lastErrorMessage}
      enableInfScroll={true}
      loadMore={() => loadNextPage(dispatch, state)}
      loading={state.movies.loading}
      morePages={state.movies.morePagesAvailable}
    />
  );
}

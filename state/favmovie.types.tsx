import { Movie } from "./api.types";

export type MovieId = Movie["id"];

export type MovieLoadingError = string;

export type MoviesListPage = number;

export type FavMovieState = {
    movies: {
        data: Movie[];
        loaded: boolean;
        loading: boolean;
        error: boolean;
        lastErrorMessage?: MovieLoadingError;
        lastPageLoaded?: MoviesListPage;
    };
    favorites: {
        data: MovieId[];
        loaded: boolean;
    };
};

export enum ActionTypes {
    LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST",
    LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS",
    LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE",
    ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
    REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
    LOAD_INITIAL_FAVORITES = "LOAD_INITIAL_FAVORITES"
}

export type FavMovieAction =
    | { type: ActionTypes.LOAD_MOVIES_REQUEST; }
    | { type: ActionTypes.LOAD_MOVIES_SUCCESS; payload: Movie[] }
    | { type: ActionTypes.LOAD_MOVIES_FAILURE; payload: MovieLoadingError; }
    | { type: ActionTypes.ADD_TO_FAVORITES; payload: MovieId }
    | { type: ActionTypes.REMOVE_FROM_FAVORITES; payload: MovieId }
    | { type: ActionTypes.LOAD_INITIAL_FAVORITES; payload: MovieId[] }
    ;

export type FavMovieContextType = {
    
    state: FavMovieState;

    dispatch: React.Dispatch<FavMovieAction>;
}

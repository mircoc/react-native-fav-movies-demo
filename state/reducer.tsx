import { FavMovieState, FavMovieAction, ActionTypes } from "./favmovie.types";

export const favMovieReducer = (state: FavMovieState, action: FavMovieAction): FavMovieState => {
    switch (action.type) {
        case ActionTypes.LOAD_MOVIES_REQUEST:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    loading: true,
                }
            };
        case ActionTypes.LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                movies: {
                    loading: false,
                    loaded: true,
                    error: false,
                    data: [ ...state.movies.data, ...action.payload],
                }
            };
        case ActionTypes.LOAD_MOVIES_FAILURE:
            return {
               ...state,
                movies: {
                    ...state.movies,
                    loading: false,
                    error: true,
                    lastErrorMessage: action.payload,
                }
            };
        case ActionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    data: [...state.favorites.data, action.payload],
                }
            };
        case ActionTypes.LOAD_INITIAL_FAVORITES:
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    data: action.payload,
                    loaded: true,
                }
            };
        case ActionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: {
                   ...state.favorites,
                    data: state.favorites.data.filter(id => id !== action.payload),
                }
            };
        default:
            return {
                ...state
            };
        }
    };

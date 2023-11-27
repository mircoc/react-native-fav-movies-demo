import React, { FC, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { FavMovieContextType, FavMovieState } from "./favmovie.types";
import { favMovieReducer } from "./reducer";


const initialState: FavMovieState = {
    movies: {
        // lastPageLoaded: 444,  // last is 449 for testing ...
        pageRequested: 1,
        data: {},
        loaded: false,
        loading: false,
        error: false,
        dataOrder: [],
    },
    favorites: {
        data: [],
        loaded: false
    }
};

const FavMovieContext = createContext<FavMovieContextType>({
    state: initialState,
    dispatch: () => null
});

export const FavMoviesProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(favMovieReducer, initialState);

    return (
        <FavMovieContext.Provider value={{ state, dispatch }}>
            {children}
        </FavMovieContext.Provider>
    );
};

export const useFavMoviesContext = () => useContext(FavMovieContext);

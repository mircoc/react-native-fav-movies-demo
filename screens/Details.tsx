import React, { useEffect } from "react";
import { useFavMoviesContext } from "../state";
import {
  addToFavorites,
  removeFromFavorites,
} from "../state/actions";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  MovieInfoScreenNavigationProp,
  MovieInfoScreenRoutenProp,
} from "../components/Navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MovieDetail from "../components/MovieDetail";
import ErrorFullScreen from "../components/ErrorFullScreen";

export default function DetailsScreen() {
  const { state, dispatch } = useFavMoviesContext();
  const route = useRoute<MovieInfoScreenRoutenProp>();
  const navigation = useNavigation<MovieInfoScreenNavigationProp>();

  const movieId = route?.params?.movieId || -1;
  const movie = state.movies.data[movieId];
  if (!movie) {
    return <ErrorFullScreen message="Movie not found" />;
  }
  const isFavorited = state.favorites.data.indexOf(movieId) !== -1;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name={isFavorited ? "heart" : "heart-outline"}
          size={28}
          style={{padding: 5}}
          color={isFavorited ? "red" : "black"}
          onPress={() =>
            isFavorited
              ? removeFromFavorites(dispatch, state, movieId)
              : addToFavorites(dispatch, state, movieId)
          }
        />
      ),
    });
  }, [isFavorited, movieId]);

  return (
    <MovieDetail
      backdropImageUrl={movie.backdrop_path}
      movieId={movieId}
      overview={movie.overview}
      title={movie.title}
    />
  );
}

import React from "react";
import { Text } from "./Themed";
import { ActivityIndicator, FlatList, Pressable } from "react-native";
import { MovieListItem } from "./MovieListItem";
import { IMAGE_URI_PREFIX } from "../state/api.conf";
import { Movie } from "../state/api.types";
import { useNavigation } from "@react-navigation/native";
import { MovieInfoScreenNavigationProp } from "./Navigation";

const ErrorTextComponent = ({ errorText }: { errorText?: string }) => (
  <Text>
    Error loading movies
    {errorText && <>: {errorText}</>}
  </Text>
);

export type MovieListProps = {
  data: Movie[];
  error: boolean;
  loaded: boolean;
  errorText?: string;
};

export default function MoviesList({
  data,
  error,
  errorText,
  loaded,
}: MovieListProps) {
  const navigation = useNavigation<MovieInfoScreenNavigationProp>();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate("Movie Info", { movieId: item.id })}>
          <MovieListItem
            title={item.title}
            posterImageUrl={`${IMAGE_URI_PREFIX}${item.poster_path}`}
            releaseDate={item.release_date}
            movieId={item.id}
            voteAvarage={item.vote_average}
          />
        </Pressable>
      )}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={
        loaded && error ? (
          <ErrorTextComponent errorText={errorText} />
        ) : !loaded ? (
          <ActivityIndicator />
        ) : (
          <Text>No movies found</Text>
        )
      }
    />
  );
}

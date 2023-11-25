import React, { useEffect } from "react";
import { View, Text } from "./Themed";
import { useFavMoviesContext } from "../state";
import { loadInitialFavorites, loadMovies } from "../state/actions";
import { ActivityIndicator, FlatList, StyleSheet, Image } from "react-native";
import { MovieId } from "../state/favmovie.types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 2,
    flex: 1,
    flexDirection: "row",
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    // flexDirection: "column",
    backgroundColor: "#fff",
    color: "#000",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    color: "#000",
    flexDirection: "row",
    fontWeight: "bold",
  },
  title: {
    color: "#000",
    fontSize: 26,
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  year: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  star: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
});

export type MovieListItemProps = {
  title: string;
  posterImageUrl: string;
  releaseDate: string;
  voteAvarage: number;
  movieId: MovieId;
};

function releaseDateToYear(releaseDate: string) {
  return releaseDate.substring(0, 4);
}

function voteFormatter(voteAvarege: number, precision = 1) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(voteAvarege * multiplier) / multiplier;
}

export function MovieListItem({
  title,
  posterImageUrl,
  releaseDate,
  voteAvarage,
  movieId,
}: MovieListItemProps) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: posterImageUrl }} resizeMode={"cover"} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.year}>
            <MaterialCommunityIcons name="calendar" size={16} color="grey" />{" "}
            {releaseDateToYear(releaseDate)}
          </Text>
          <Text style={styles.star}>
            <MaterialCommunityIcons name="star" size={16} color="rgb(241, 206, 75)" />{" "}
            {voteFormatter(voteAvarage)}
          </Text>
        </View>
      </View>
    </View>
  );
}

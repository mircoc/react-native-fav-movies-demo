import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { MovieId } from "../state/favmovie.types";
import { IMAGE_URI_PREFIX } from "../state/api.conf";

export type MovieListItemProps = {
  title: string;
  backdropImageUrl: string;
  overview: string;
  movieId: MovieId;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    height: 300,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  text: {
    padding: 20,
    fontSize: 22,
    color: "#000",
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default function MovieDetail({
  title,
  backdropImageUrl,
  overview,
}: MovieListItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: `${IMAGE_URI_PREFIX}${backdropImageUrl}` }}
          style={styles.image}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </View>
      <Text style={styles.text}>{overview}</Text>
    </View>
  );
}

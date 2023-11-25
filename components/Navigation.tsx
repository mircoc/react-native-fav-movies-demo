import { StatusBar, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/Movies";
import FavoritesScreen from "../screens/Favorites";
import DetailsScreen from "../screens/Details";
import { useFavMoviesContext } from "../state";
import { MovieId } from "../state/favmovie.types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NavigationParamList = {
  Movies: undefined;
  "Movie Info": { movieId: MovieId };
  Favorites: undefined;
};

export type MovieInfoProps = NativeStackScreenProps<
  NavigationParamList,
  "Movie Info"
>;
export type MovieInfoScreenNavigationProp = MovieInfoProps["navigation"];
export type MovieInfoScreenRoutenProp = MovieInfoProps['route'];


const Stack = createNativeStackNavigator<NavigationParamList>();

export default function Navigation() {
  const { state } = useFavMoviesContext();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate("Favorites");
                }}
                disabled={!state.movies.loaded}
                title="Favorites"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Movie Info" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

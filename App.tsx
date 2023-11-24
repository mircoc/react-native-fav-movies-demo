import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { FavMoviesProvider } from "./state";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <FavMoviesProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
        <ExpoStatusBar />
      </SafeAreaView>
    </FavMoviesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

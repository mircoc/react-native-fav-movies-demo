import React from "react";
import { View, Text } from "../components/Themed";

export default function ErrorFullScreen({ message }: { message: string }) {
  // FIXME!!!
  return (
    <View
      style={{
        backgroundColor: "blue",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ backgroundColor: "red" }}> {message} </Text>
    </View>
  );
}

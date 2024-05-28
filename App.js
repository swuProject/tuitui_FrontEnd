import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import MainContainer from "./src/navigation/MainContainer";

export default function App() {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
}

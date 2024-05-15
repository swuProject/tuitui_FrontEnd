import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import SignUp from "./components/SignUp";
import MainContainer from "./navigation/MainContainer";

export default function App() {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
}

import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import CameraScreen from "./screens/CameraScreen";
import AlarmScreen from "./screens/AlarmScreen";
import ChatScreen from "./screens/ChatScreen";

// Screen names
const homeName = "Home";
const mapName = "Map";
const cameraName = "Camera";
const alarmName = "Alarm";
const chatName = "Chat";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === mapName) {
              iconName = focused ? "map" : "map-outline";
            } else if (rn === cameraName) {
              iconName = focused ? "camera" : "camera-outline";
            } else if (rn === alarmName) {
              iconName = focused ? "alarm" : "alarm-outline";
            } else if (rn === chatName) {
              iconName = focused ? "chatbox" : "chatbox-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={cameraName} component={CameraScreen} />
        <Tab.Screen name={alarmName} component={AlarmScreen} />
        <Tab.Screen name={chatName} component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

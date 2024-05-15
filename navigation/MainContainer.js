import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import CameraScreen from "./screens/CameraScreen";
import AlarmScreen from "./screens/AlarmScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

// Screen names
const homeName = "Home";
const mapName = "Map";
const cameraName = "Camera";
const alarmName = "Alarm";
const chatName = "Chat";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const CameraStack = createStackNavigator();
const AlramStack = createStackNavigator();
const ChatStack = createStackNavigator();

// 홈 스택화면 (프로필 화면)
const HomeStackScreen = ({ navigation }) => {
  const goToProfile = (e) => {
    navigation.navigate("Profile");
  };

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "HomeScreen", // 여기가 홈화면 헤더
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              <FontAwesome name="user-circle-o" size={24} color="black" />
            </TouchableOpacity> // 프로필 화면으로 이동 버튼
          ),
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const MainContainer = () => {
  return (
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
      <Tab.Screen
        name={homeName}
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={mapName} component={MapScreen} />
      <Tab.Screen name={cameraName} component={CameraScreen} />
      <Tab.Screen name={alarmName} component={AlarmScreen} />
      <Tab.Screen name={chatName} component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default MainContainer;

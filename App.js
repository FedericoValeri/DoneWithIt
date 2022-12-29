import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}

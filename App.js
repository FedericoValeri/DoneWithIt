import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Yuo need to enable permission to access Gallery");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image.", error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Button title="Select image" onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        <ImageInput imageUri={imageUri} />
      </Screen>
    </GestureHandlerRootView>
  );
}

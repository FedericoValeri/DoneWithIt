import { View } from "react-native";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <Screen>
          <AppPicker
            selectedItem={category}
            onSelectItem={(item) => setCategory(item)}
            items={categories}
            placeholder={"Category"}
            icon="apps"
          />
          <AppTextInput placeholder="Email" icon="email" />
        </Screen>
      }
    </GestureHandlerRootView>
  );
}

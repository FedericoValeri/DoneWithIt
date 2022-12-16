import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {<ListingEditScreen />}
    </GestureHandlerRootView>
  );
}

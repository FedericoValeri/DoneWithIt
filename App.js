import { View } from "react-native";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  //return <WelcomeScreen />;
  return (
    <View
      style={{ backgroundColor: "lightgrey", padding: 20, paddingTop: 100 }}
    >
      <Card
        title={"Red jacket for sale"}
        subTitle="€100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

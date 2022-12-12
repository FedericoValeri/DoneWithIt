import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

export default function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

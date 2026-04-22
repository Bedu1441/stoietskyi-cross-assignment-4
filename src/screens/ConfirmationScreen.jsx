import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ConfirmationScreen = ({ route }) => {
  const sessionId = route?.params?.sessionId;
  const sessionTitle = route?.params?.sessionTitle;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Success 🎉</Text>

      <Text style={styles.text}>
        {sessionTitle || "Session unlocked"}
      </Text>

      <Text style={styles.meta}>
        Session ID: {sessionId ?? "Not provided"}
      </Text>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F0E8",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2A24",
  },
  text: {
    marginTop: 10,
    color: "#6E756F",
  },
  meta: {
    marginTop: 10,
    color: "#2F7A55",
    fontWeight: "600",
  },
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SessionDetailsScreen = ({ route }) => {
  const { title, age, duration } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || "Session not found"}</Text>
      <Text style={styles.text}>Age: {age || "N/A"}</Text>
      <Text style={styles.text}>Duration: {duration || "N/A"}</Text>
    </View>
  );
};

export default SessionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F0E8",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2A24",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#6E756F",
    marginBottom: 8,
  },
});
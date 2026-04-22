import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.title}>Purchase Successful!</Text>

      <Text style={styles.subtitle}>Nature Scavenger Hunt unlocked</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2F7A55",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  check: {
    color: "white",
    fontSize: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    color: "#6E756F",
  },
});

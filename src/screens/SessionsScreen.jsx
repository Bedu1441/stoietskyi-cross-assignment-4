import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SessionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sessions</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("SessionDetails", {
            title: "Nature Walk",
            age: "4-8",
            duration: "30 min",
          })
        }
      >
        <Text style={styles.cardTitle}>Nature Walk</Text>
        <Text style={styles.cardMeta}>Tap to view details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("SessionDetails", {
            title: "Paper Bridge Builder",
            age: "7-10",
            duration: "40 min",
          })
        }
      >
        <Text style={styles.cardTitle}>Paper Bridge Builder</Text>
        <Text style={styles.cardMeta}>Tap to view details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SessionsScreen;

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
    marginBottom: 20,
  },
  card: {
    marginTop: 12,
    padding: 20,
    backgroundColor: "#FFFDF9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E0D5",
  },
  cardTitle: {
    fontWeight: "700",
    color: "#1F2A24",
  },
  cardMeta: {
    marginTop: 6,
    color: "#6E756F",
  },
});
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AppHeader from "../components/AppHeader";
import SessionCard from "../components/SessionCard";
import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader title="OIKEON" rightBadge="👤" />

        <Text style={styles.greeting}>Good morning, Sarah 👋</Text>
        <Text style={styles.sub}>Ready for today’s family activity?</Text>

        <SessionCard
          title="Nature Scavenger Hunt"
          subtitle="Weekly Pick"
          age="Age 4-8"
          duration="45 min"
          backgroundColor={COLORS.primary}
          large
          ctaText="Start"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Confirmation", {
              sessionId: 1,
              sessionTitle: "Nature Scavenger Hunt",
            })
          }
        >
          <Text style={styles.buttonText}>Open Confirmation</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
    maxWidth: 420,
    width: "100%",
    alignSelf: "center",
  },
  greeting: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
  },
  sub: {
    marginBottom: SPACING.md,
    color: COLORS.subtext,
  },
  button: {
    marginTop: SPACING.md,
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
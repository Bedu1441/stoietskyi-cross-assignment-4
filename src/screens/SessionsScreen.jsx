import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppHeader from "../components/AppHeader";
import BottomTabBar from "../components/BottomTabBar";
import CategoryChip from "../components/CategoryChip";
import SearchBar from "../components/SearchBar";
import SessionCard from "../components/SessionCard";
import { COLORS } from "../constants/colors";
import { allSessions, chips } from "../constants/mockData";
import { SPACING } from "../constants/spacing";

const SessionsScreen = () => {
  const [activeChip, setActiveChip] = useState("All");

  const filteredSessions = useMemo(() => {
    if (activeChip === "All") return allSessions;
    return allSessions.filter((item) =>
      item.age.includes(activeChip.replace("Age ", "Age ")),
    );
  }, [activeChip]);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader
          title="Explore Sessions"
          subtitle="Find the perfect activity for your family"
          leftIcon="‹"
        />

        <SearchBar />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
        >
          {chips.map((chip) => (
            <CategoryChip
              key={chip.id}
              title={chip.title}
              active={activeChip === chip.title}
              onPress={() => setActiveChip(chip.title)}
            />
          ))}
        </ScrollView>

        <View style={styles.grid}>
          {filteredSessions.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <SessionCard
                title={item.title}
                subtitle={item.subtitle}
                age={item.age}
                duration={item.duration}
                backgroundColor={item.backgroundColor}
              />
            </View>
          ))}
        </View>

        <BottomTabBar activeTab="Sessions" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  chipsRow: {
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    marginBottom: SPACING.md,
  },
});

export default SessionsScreen;

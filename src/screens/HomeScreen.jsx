import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";
import BottomTabBar from "../components/BottomTabBar";
import SessionCard from "../components/SessionCard";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader title="OIKEON" rightBadge="👤" />

        <Text style={styles.greeting}>Good morning, Sarah 👋</Text>
        <Text style={styles.subgreeting}>
          Ready for today’s family activity?
        </Text>

        <SessionCard
          title="Nature Scavenger Hunt"
          subtitle="Weekly Pick"
          age="Age 4-8"
          duration="45 min"
          backgroundColor={COLORS.primary}
          large
          ctaText="Start"
        />

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Recommended For You</Text>
          <Text style={styles.link}>See all</Text>
        </View>

        <View style={styles.rowWrap}>
          <SessionCard
            title="Railway Mobile Craft"
            subtitle="Build & Create"
            age="Age 5-8"
            duration="35 min"
            backgroundColor="#D8E9DE"
          />
        </View>

        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <View style={styles.continueCard}>
          <View>
            <Text style={styles.continueTitle}>Kitchen Chemistry — Week 2</Text>
            <Text style={styles.continueNote}>
              Step 3 of 5 • 12 min remaining
            </Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>

        <BottomTabBar activeTab="Home" />
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
    maxWidth: 420,
    width: "100%",
    alignSelf: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
  },
  subgreeting: {
    marginTop: SPACING.xs,
    marginBottom: SPACING.md,
    fontSize: 13,
    color: COLORS.subtext,
  },
  sectionRow: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
  },
  link: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "600",
  },
  rowWrap: {
    flexDirection: "row",
  },
  continueCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  continueTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.text,
  },
  continueNote: {
    marginTop: SPACING.xs,
    fontSize: 12,
    color: COLORS.subtext,
  },
  arrow: {
    fontSize: 24,
    color: COLORS.subtext,
  },
});

export default HomeScreen;

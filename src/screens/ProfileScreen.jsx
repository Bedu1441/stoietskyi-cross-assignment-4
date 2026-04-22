import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";
import BottomTabBar from "../components/BottomTabBar";
import SecondaryButton from "../components/SecondaryButton";
import StatCard from "../components/StatCard";
import { COLORS } from "../constants/colors";
import { mySessions, profileStats } from "../constants/mockData";
import { RADIUS, SPACING } from "../constants/spacing";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader title="My Profile" rightIcon="Edit" />

        <View style={styles.hero}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SJ</Text>
          </View>
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.email}>Family ID • johnson2025</Text>
        </View>

        <View style={styles.statsRow}>
          {profileStats.map((stat, index) => (
            <View key={stat.id} style={styles.statWrap}>
              <StatCard value={stat.value} label={stat.label} />
            </View>
          ))}
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>My Sessions</Text>
          <Text style={styles.link}>See all</Text>
        </View>

        {mySessions.map((item) => (
          <View key={item.id} style={styles.listCard}>
            <View>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listNote}>{item.note}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Settings</Text>

        {["Notifications", "Family Members", "Billing & Plans"].map((item) => (
          <View key={item} style={styles.settingRow}>
            <Text style={styles.settingText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}

        <View style={styles.buttonWrap}>
          <SecondaryButton title="Edit Profile" />
        </View>

        <BottomTabBar activeTab="Profile" />
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
  hero: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#F3C95A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.white,
  },
  email: {
    marginTop: SPACING.xs,
    fontSize: 13,
    color: "#E7F0EA",
  },
  statsRow: {
    flexDirection: "row",
    marginBottom: SPACING.lg,
  },
  statWrap: {
    flex: 1,
  },
  sectionRow: {
    marginBottom: SPACING.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
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
  listCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.text,
  },
  listNote: {
    marginTop: SPACING.xs,
    fontSize: 12,
    color: COLORS.subtext,
  },
  settingRow: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingText: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: "600",
  },
  arrow: {
    fontSize: 22,
    color: COLORS.subtext,
  },
  buttonWrap: {
    marginTop: SPACING.md,
  },
});

export default ProfileScreen;

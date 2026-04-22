import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const tabs = [
  { key: "Home", icon: "⌂" },
  { key: "Sessions", icon: "▦" },
  { key: "Profile", icon: "◉" },
];

const BottomTabBar = ({ activeTab = "Home" }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            activeOpacity={0.8}
          >
            <View style={[styles.iconWrap, active && styles.activeWrap]}>
              <Text style={[styles.icon, active && styles.activeIcon]}>
                {tab.icon}
              </Text>
            </View>
            <Text style={[styles.label, active && styles.activeLabel]}>
              {tab.key}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.sm,
    borderRadius: RADIUS.xl,
    marginTop: SPACING.lg,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  activeWrap: {
    backgroundColor: "#DCECDF",
  },
  icon: {
    fontSize: 14,
    color: COLORS.tabInactive,
  },
  activeIcon: {
    color: COLORS.primary,
  },
  label: {
    fontSize: 11,
    color: COLORS.tabInactive,
  },
  activeLabel: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});

export default BottomTabBar;

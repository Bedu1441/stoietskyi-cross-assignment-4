import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const StatCard = ({ value, label }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SPACING.md,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
  },
  value: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primaryDark,
    marginBottom: SPACING.xs,
  },
  label: {
    fontSize: 12,
    color: COLORS.subtext,
    textAlign: "center",
  },
});

export default StatCard;

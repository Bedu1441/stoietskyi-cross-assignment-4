import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const CategoryChip = ({ title, active = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.activeChip]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.sm,
  },
  activeChip: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.subtext,
  },
  activeText: {
    color: COLORS.white,
  },
});

export default CategoryChip;

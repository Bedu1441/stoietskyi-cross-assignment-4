import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const AppHeader = ({
  title,
  subtitle,
  leftIcon = null,
  rightIcon = "⋯",
  rightBadge = null,
  onLeftPress,
  onRightPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={[styles.iconButton, !leftIcon && styles.hiddenButton]}
          onPress={onLeftPress}
          activeOpacity={0.8}
        >
          {leftIcon ? <Text style={styles.iconText}>{leftIcon}</Text> : null}
        </TouchableOpacity>

        <View style={styles.centerBlock}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={onRightPress}
          activeOpacity={0.8}
        >
          {rightBadge ? (
            <View style={styles.badgeCircle}>
              <Text style={styles.badgeText}>{rightBadge}</Text>
            </View>
          ) : (
            <Text style={styles.iconText}>{rightIcon}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerBlock: {
    flex: 1,
    paddingHorizontal: SPACING.sm,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
  subtitle: {
    marginTop: SPACING.xs,
    fontSize: 13,
    color: COLORS.subtext,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.pill,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  hiddenButton: {
    opacity: 0,
  },
  iconText: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: "700",
  },
  badgeCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#D9E7C8",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.primaryDark,
  },
});

export default AppHeader;

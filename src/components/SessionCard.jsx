import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const SessionCard = ({
  title,
  subtitle,
  age,
  duration,
  backgroundColor = COLORS.mutedGreen,
  large = false,
  ctaText = null,
}) => {
  const { width } = useWindowDimensions();

  // Адаптація ширини картки для різних екранів і орієнтацій
  const dynamicWidth = large
    ? width > 800
      ? width * 0.42
      : width * 0.82
    : width > 800
      ? width * 0.22
      : width * 0.42;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor, width: dynamicWidth },
        large && styles.largeCard,
      ]}
    >
      <View style={styles.illustration} />
      <Text style={[styles.badge, large && styles.badgeOnDark]}>
        {subtitle}
      </Text>
      <Text style={[styles.title, large && styles.titleOnDark]}>{title}</Text>

      <View style={styles.metaRow}>
        <Text style={[styles.meta, large && styles.metaOnDark]}>{age}</Text>
        <Text style={[styles.meta, large && styles.metaOnDark]}>
          {duration}
        </Text>
      </View>

      {ctaText ? (
        <TouchableOpacity style={styles.inlineButton} activeOpacity={0.8}>
          <Text style={styles.inlineButtonText}>{ctaText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginRight: SPACING.md,
    minHeight: 150,
  },
  largeCard: {
    minHeight: 190,
  },
  illustration: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.22)",
    marginBottom: SPACING.md,
  },
  badge: {
    fontSize: 11,
    color: COLORS.subtext,
    marginBottom: SPACING.xs,
    fontWeight: "600",
  },
  badgeOnDark: {
    color: "#DDEEE5",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  titleOnDark: {
    color: COLORS.white,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "auto",
  },
  meta: {
    fontSize: 11,
    color: COLORS.subtext,
    marginRight: SPACING.sm,
    backgroundColor: "rgba(255,255,255,0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: RADIUS.pill,
    overflow: "hidden",
  },
  metaOnDark: {
    color: COLORS.white,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  inlineButton: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.secondary,
    borderRadius: RADIUS.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: SPACING.md,
  },
  inlineButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
});

export default SessionCard;

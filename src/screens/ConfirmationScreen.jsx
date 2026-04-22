import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import SessionCard from "../components/SessionCard";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const ConfirmationScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader
          title="Confirmation"
          subtitle="Purchase completed"
          leftIcon="‹"
        />

        <View style={styles.successWrap}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          </View>

          <Text style={styles.title}>Purchase Successful! 🎉</Text>
          <Text style={styles.subtitle}>
            You now have full access to Nature Scavenger Hunt
          </Text>
        </View>

        <View style={styles.cardWrap}>
          <SessionCard
            title="Nature Scavenger Hunt"
            subtitle="Outdoor Activity"
            age="Age 4-8"
            duration="45 min"
            backgroundColor={COLORS.mutedMint}
          />
        </View>

        <View style={styles.statusPill}>
          <Text style={styles.statusText}>✓ Unlocked</Text>
        </View>

        <View style={styles.primaryWrap}>
          <PrimaryButton title="Open Session Now" icon="▶" />
        </View>

        <View style={styles.secondaryWrap}>
          <SecondaryButton title="Return to Home" icon="⌂" />
        </View>

        <Text style={styles.footerNote}>
          Session saved to My Sessions in your profile for easy access anytime
        </Text>
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
    alignItems: "center",
  },
  successWrap: {
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  outerCircle: {
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: "#E5EFE8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.lg,
  },
  innerCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: "700",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.subtext,
    textAlign: "center",
    maxWidth: 280,
    lineHeight: 20,
  },
  cardWrap: {
    width: "100%",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  statusPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: RADIUS.pill,
    backgroundColor: "#DCECDF",
    marginBottom: SPACING.lg,
  },
  statusText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: "700",
  },
  primaryWrap: {
    width: "100%",
    marginBottom: SPACING.md,
  },
  secondaryWrap: {
    width: "100%",
    marginBottom: SPACING.md,
  },
  footerNote: {
    fontSize: 12,
    color: COLORS.subtext,
    textAlign: "center",
    lineHeight: 18,
    maxWidth: 300,
  },
});

export default ConfirmationScreen;

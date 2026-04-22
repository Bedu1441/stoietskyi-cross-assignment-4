import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const CartScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader title="Checkout" subtitle="Review your order" leftIcon="‹" />

        <View style={styles.card}>
          <Text style={styles.label}>Order Summary</Text>
          <Text style={styles.title}>Nature Scavenger Hunt</Text>
          <Text style={styles.note}>Single Session Access • Lifetime</Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Total</Text>
            <Text style={styles.price}>$4.99</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Card Number</Text>
        <View style={styles.input}>
          <Text style={styles.inputText}>1234 5678 9012 3456</Text>
        </View>

        <View style={styles.inlineRow}>
          <View style={styles.half}>
            <Text style={styles.sectionTitle}>Expiry</Text>
            <View style={styles.input}>
              <Text style={styles.inputText}>MM / YY</Text>
            </View>
          </View>

          <View style={styles.half}>
            <Text style={styles.sectionTitle}>CVV</Text>
            <View style={styles.input}>
              <Text style={styles.inputText}>•••</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Name on Card</Text>
        <View style={[styles.input, styles.activeInput]}>
          <Text style={styles.inputText}>Sarah Johnson</Text>
        </View>

        <Text style={styles.accepted}>Accepted: Visa • MC • Amex • PayPal</Text>

        <View style={styles.buttonWrap}>
          <PrimaryButton title="Confirm Purchase • $4.99" icon="✓" />
        </View>

        <View style={styles.secondaryWrap}>
          <SecondaryButton title="Return to Home" />
        </View>

        <Text style={styles.footerNote}>
          256-bit SSL encryption • Cancel anytime
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
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  label: {
    fontSize: 12,
    color: COLORS.subtext,
    marginBottom: SPACING.xs,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  note: {
    marginTop: SPACING.xs,
    fontSize: 13,
    color: COLORS.subtext,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLabel: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 13,
    color: COLORS.text,
    fontWeight: "600",
    marginBottom: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 14,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  activeInput: {
    borderColor: COLORS.primary,
  },
  inputText: {
    fontSize: 14,
    color: COLORS.text,
  },
  inlineRow: {
    flexDirection: "row",
    gap: SPACING.sm,
  },
  half: {
    flex: 1,
  },
  accepted: {
    fontSize: 12,
    color: COLORS.subtext,
    marginBottom: SPACING.lg,
  },
  buttonWrap: {
    marginBottom: SPACING.md,
  },
  secondaryWrap: {
    marginBottom: SPACING.md,
  },
  footerNote: {
    fontSize: 11,
    color: COLORS.subtext,
    textAlign: "center",
  },
});

export default CartScreen;

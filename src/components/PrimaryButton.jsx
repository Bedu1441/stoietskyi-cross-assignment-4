import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const PrimaryButton = ({ title, icon = null, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.content}>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.pill,
    paddingVertical: 14,
    paddingHorizontal: SPACING.lg,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: COLORS.white,
    fontSize: 14,
    marginRight: SPACING.sm,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "700",
  },
});

export default PrimaryButton;

import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const SearchBar = ({ placeholder = "Search sessions, topics…" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔎</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.subtext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
  },
  icon: {
    marginRight: SPACING.sm,
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
  },
});

export default SearchBar;

import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  const renderItem = ({ item }) => {
    const isActive = selectedCategory === item.title;

    return (
      <TouchableOpacity
        style={[styles.item, isActive && styles.activeItem]}
        activeOpacity={0.8}
        onPress={() => onSelectCategory(item.title)}
      >
        <Text style={[styles.text, isActive && styles.activeText]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: SPACING.sm,
  },
  item: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.sm,
  },
  activeItem: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.text,
    fontWeight: "500",
  },
  activeText: {
    color: "#fff",
  },
});

export default CategoryList;

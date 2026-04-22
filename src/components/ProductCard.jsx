import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import { COLORS } from "../constants/colors";
import { RADIUS, SPACING } from "../constants/spacing";

const ProductCard = ({ title, price, rating, imageUrl }) => {
  const { width } = useWindowDimensions();
  const cardWidth = width > 700 ? width * 0.28 : width * 0.6;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    overflow: "hidden",
    marginRight: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: "100%",
    height: 140,
  },
  content: {
    padding: SPACING.md,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  rating: {
    fontSize: 14,
    color: COLORS.subtext,
    marginBottom: SPACING.sm,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default ProductCard;

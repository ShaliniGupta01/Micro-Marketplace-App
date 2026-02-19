import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  priceContainer: {
    backgroundColor: "#4CAF50",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  price: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

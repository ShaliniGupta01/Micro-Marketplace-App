import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f7fa",
    flexGrow: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },

  /* Delivered Product Card */
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2ecc71",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },

  noProduct: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },

  /* Info Cards */
  infoCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },

  item: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
});

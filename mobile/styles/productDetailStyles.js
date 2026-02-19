import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  image: {
    width: "100%",
    height: 250,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },

  deliverBtn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  deliverText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  heartIcon: {
  position: "absolute",
  top: 20,
  right: 20,
  backgroundColor: "rgba(0,0,0,0.4)",
  padding: 8,
  borderRadius: 50,
},


});

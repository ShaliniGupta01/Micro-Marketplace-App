import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  header: {
    padding: 20,
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
    marginTop: 4,
  },

  search: {
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    elevation: 3,
  },

  categoriesContainer: {
    paddingLeft: 20,
    marginBottom: 20,
  },

  category: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});

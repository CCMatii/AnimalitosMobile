import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 7,
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default styles;
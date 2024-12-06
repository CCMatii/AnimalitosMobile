import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      width: "90%",
      backgroundColor: "#ADD8E6", //celeste
      borderRadius: 15,
      borderWidth: 4,
      borderColor: "#FFD700", // Dorado
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 10,
    },
    imageContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 2,
      borderColor: "#blue", // Azul ?
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#1E90FF",
      textAlign: "center",
      marginBottom: 10,
    },
    infoSection: {
      marginVertical: 5,
    },
    label: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#333",
    },
    text: {
      fontSize: 16,
      color: "#555",
    },
  });
  export default modalStyles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 25,
    marginRight: 15, // Añadir espacio entre tarjetas horizontales
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    width: 250, // Ajustar el ancho del Card
    height: 300, // Ajustar el alto del Card
  },
  image: {
    width: 200, // Ajustar el tamaño de la imagen dentro del Card
    height: 150, // Ajustar el tamaño de la imagen dentro del Card
    borderRadius: 7,
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center", // Centrar el texto
  },
});

export default styles;

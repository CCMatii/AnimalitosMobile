import React, { useState } from "react";
import { View, Text, Image, Button, Modal, StyleSheet, ScrollView } from "react-native";

const AnimalCard = ({ animal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.card}>
        <Image source={{ uri: animal.imagen }} style={styles.image} />
        <Text style={styles.name}>{animal.nombre}</Text>
        <Button
          title="Más información"
          onPress={() => setModalVisible(true)} /* aqui dice q al precionar el mas informacion se abre el modal*/
        />
      </View>
      
      
      <Modal         /*el modal en cuestion */
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        /*infinidad de estilos para que parezca la carta pokemon, ademas de llamar a la api con la informacion para q rellene con la informacion respectiva*/
       
      > 
        <View style={modalStyles.modalOverlay}>
          <View style={modalStyles.modalContent}>
            <ScrollView>
              <View style={modalStyles.imageContainer}>
                <Image source={{ uri: animal.imagen }} style={modalStyles.image} />
              </View>
              <Text style={modalStyles.title}>{animal.nombre}</Text>
              <View style={modalStyles.infoSection}>
                <Text style={modalStyles.label}>Edad:</Text>
                <Text style={modalStyles.text}>{animal.edad}</Text>
              </View>
              <View style={modalStyles.infoSection}>
                <Text style={modalStyles.label}>Género:</Text>
                <Text style={modalStyles.text}>{animal.genero}</Text>
              </View>
              <View style={modalStyles.infoSection}>
                <Text style={modalStyles.label}>Descripción física:</Text>
                <Text style={modalStyles.text}>{animal.desc_fisica}</Text>
              </View>
              <View style={modalStyles.infoSection}>
                <Text style={modalStyles.label}>Personalidad:</Text>
                <Text style={modalStyles.text}>{animal.desc_personalidad}</Text>
              </View>
              <View style={modalStyles.infoSection}>
                <Text style={modalStyles.label}>Esterilización:</Text>
                <Text style={modalStyles.text}>
                  {animal.esterilizado ? "Sí está esterilizado" : "No está esterilizado"}
                </Text>
              </View>
            </ScrollView>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} /*el modal tiene el boton de cerrar q cierra jiji*//>                     
          </View>
        </View>
      </Modal>
    </>
  );
};

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

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default AnimalCard;

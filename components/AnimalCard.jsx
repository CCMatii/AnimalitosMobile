import React, { useState } from "react";
import { View, Text, Image, Button, Modal, StyleSheet, ScrollView } from "react-native";
import styles from "./AnimalCardStyles";
import modalStyles from "./modalStyles";


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
                <Text style={modalStyles.text}>{animal.desc_fisica.replace(/<\/?p>/g, "")}</Text>
              </View>
              <View style={modalStyles.infoSection}>
                <Text style={modalStyles.label}>Personalidad:</Text>
                <Text style={modalStyles.text}>{animal.desc_personalidad.replace(/<\/?p>/g, "")}</Text>
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

export default AnimalCard;

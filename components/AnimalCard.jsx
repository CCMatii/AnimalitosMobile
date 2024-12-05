import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "./AnimalCardStyles";

const AnimalCard = ({ animal }) => {
  return (
    <View style={[styles.card, { flexDirection: 'column' }]}>
      <View style={{ marginLeft: 15 }}>
        <Image source={{ uri: animal.imagen }} style={styles.image} />
        <Text style={styles.name}>{animal.nombre}</Text>
        <Button title="Más información" onPress={() => alert(`Más información de ${animal.nombre}`)} />
      </View>
    </View>
  );
};

export default AnimalCard;

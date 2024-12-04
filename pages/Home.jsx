import React from "react";
import { FlatList, Text, ImageBackground } from "react-native";
import useFetchAnimales from "../hooks/useFetchAnimales";
import AnimalCard from "../components/AnimalCard";
import styles from "./HomeStyles";

const image = {
  uri: "https://img.freepik.com/vector-gratis/fondo-huellas-patas-diseno-plano_23-2151169501.jpg?t=st=1728515781~exp=1728519381~hmac=684dabdaf504a198d9eb89d53d23e44f65304dde2aee74a3c0a8af278501652e&w=1380",
};

const Home = () => {
  const { animales, error } = useFetchAnimales();
  const renderItem = ({ item }) => <AnimalCard animal={item} />;

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.background}>
      <Text style={styles.title}>Animalitos</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={animales}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollContainer}
      />
    </ImageBackground>
  );
};

export default Home;
import React, { useState } from "react";
import { FlatList, Text, ImageBackground, ScrollView, View } from "react-native";
import useFetchAnimales from "../hooks/useFetchAnimales";
import AnimalCard from "../components/AnimalCard";
import styles from "./HomeStyles";
import { Picker } from "@react-native-picker/picker";

const image = {
  uri: "https://img.freepik.com/vector-gratis/fondo-huellas-patas-diseno-plano_23-2151169501.jpg?t=st=1728515781~exp=1728519381~hmac=684dabdaf504a198d9eb89d53d23e44f65304dde2aee74a3c0a8af278501652e&w=1380",
};

const Home = () => {
  const { animales, error } = useFetchAnimales();
  const [selectedRegion, setSelectedRegion] = useState("Todas las regiones");

  const regiones = [
    "Todas las regiones",
    "Arica y Parinacota",
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "Metropolitana de Santiago",
    "O'Higgins",
    "Maule",
    "Ñuble",
    "Biobío",
    "La Araucanía",
    "Los Ríos",
    "Los Lagos",
    "Aysén",
    "Magallanes y Antártica Chilena",
  ];

  // Listas con cada tipo de animal
  const perros = animales.filter((animal) => animal.tipo === "Perro");
  const gatos = animales.filter((animal) => animal.tipo === "Gato");
  const conejos = animales.filter((animal) => animal.tipo === "Conejo");
  const roedores = animales.filter((animal) => animal.tipo === "Roedor");
  const aves = animales.filter((animal) => animal.tipo === "Ave");

  const renderAnimalList = (data, title) => (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.subTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <AnimalCard animal={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.background}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.title}>Animalitos</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <Picker
          selectedValue={selectedRegion}
          onValueChange={(itemValue) => setSelectedRegion(itemValue)}
          style={{ height: 50, width: 200, marginLeft: "10px" }}
        >
          {regiones.map((region) => (
            <Picker.Item key={region} label={region} value={region} />
          ))}
        </Picker>
        <Text style={styles.titlepicker}>Todos los animales</Text>
        {renderAnimalList(animales, "Todos los animales")}
        {renderAnimalList(perros, "Perros")}
        {renderAnimalList(gatos, "Gatos")}
        {renderAnimalList(conejos, "Conejos")}
        {renderAnimalList(roedores, "Roedores")}
        {renderAnimalList(aves, "Aves")}
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

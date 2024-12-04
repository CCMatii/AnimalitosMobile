import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, ImageBackground } from "react-native";
import { fetchAnimales } from "./services/api";

export default function App() {
  const [animales, setAnimales] = useState([]);
  const [error, setError] = useState(null);
  
  const image = {
    uri: 'https://img.freepik.com/vector-gratis/fondo-huellas-patas-diseno-plano_23-2151169501.jpg?t=st=1728515781~exp=1728519381~hmac=684dabdaf504a198d9eb89d53d23e44f65304dde2aee74a3c0a8af278501652e&w=1380',
  };
  const getAnimales = () => {
    fetchAnimales().then(
      ({data}) => {
        setAnimales(data);
      }
    );
  };
  useEffect(() => {
    getAnimales();
  }, []);
  console.log(animales);

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>
        Animalitos
      </Text>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {error && <Text style={{ color: "red" }}>{error}</Text>}
        {animales.map((item) => (
          <View key={item.id} style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.nombre}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
// {
//   "id": 304,
//   "nombre": "Black",
//   "tipo": "Perro",
//   "color": "#F65B2A",
//   "edad": "8 Meses",
//   "estado": "adopcion",
//   "genero": "macho",
//   "desc_fisica": "<p>Negro con manchas blancas en los pies y en su pecho.</p>",
//   "desc_personalidad": "<p>Es sociable, juguetón y muy tranquilo</p>",
//   "desc_adicional": "",
//   "esterilizado": 0,
//   "vacunas": 1,
//   "imagen": "https://huachitos.cl/storage/animal-images/black-img-20241116-wa0007-1731772644.jpg",
//   "equipo": "Privado",
//   "region": "RM",
//   "comuna": "Ñuñoa",
//   "url": "https://huachitos.cl/animal/304-black"
// }
  return (
    <Text></Text>
  ) 
}
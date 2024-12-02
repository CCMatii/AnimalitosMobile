import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const image = {uri: 'https://img.freepik.com/vector-gratis/fondo-huellas-patas-diseno-plano_23-2151169501.jpg?t=st=1728515781~exp=1728519381~hmac=684dabdaf504a198d9eb89d53d23e44f65304dde2aee74a3c0a8af278501652e&w=1380'};

  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>Animalitos</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Texto blanco para contraste
    textAlign: 'center',
  },
  image:{
    justifyContent:'center',
    flex:1
  }
});

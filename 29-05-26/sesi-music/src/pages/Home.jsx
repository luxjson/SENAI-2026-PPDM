import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { musicasMock } from '../dados/musicas';

export default function Home({ navigation }) {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cardMusica} 
      onPress={() => navigation.navigate('TocandoMusica', { musica: item })}
    >
      <Image source={{ uri: item.capa }} style={styles.capaMusica} />
      <View style={styles.infoMusica}>
        <Text style={styles.tituloMusica}>{item.titulo}</Text>
        <Text style={styles.artistaMusica}>{item.artista}</Text>
      </View>
      <Text style={styles.duracaoMusica}>{item.duracao}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.saudacao}>Olá, Ouvinte!</Text>
      <Text style={styles.subtitulo}>Músicas Recomendadas</Text>

      <FlatList
        data={musicasMock}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  saudacao: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitulo: { fontSize: 16, color: "#B3B3B3", marginBottom: 20 },
  lista: { paddingBottom: 20 },
  cardMusica: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  capaMusica: { width: 50, height: 50, borderRadius: 4 },
  infoMusica: { flex: 1, marginLeft: 15 },
  tituloMusica: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  artistaMusica: { color: "#B3B3B3", fontSize: 14 },
  duracaoMusica: { color: "#888", fontSize: 14, marginRight: 5 },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor="#888" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#888" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#888" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkTexto}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: { width: 250, height: 150, resizeMode: "contain" },
  titulo: { fontSize: 24, color: "#FFF", fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    color: "#FFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  botao: {
    width: "100%",
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  botaoTexto: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  linkTexto: { color: "#ff0000", fontSize: 14 },
});
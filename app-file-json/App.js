import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const App = () => {
  const [file, setFile] = useState(null);

  const selecionarArquivo = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });
      setFile(res);
    } catch (err) {
      console.error(err);
    }
  };

  const enviarParaAPI = async () => {
    if (!file) {
      console.error('Nenhum arquivo selecionado');
      return;
    }

    try {
      const fileContents = await file.readAsStringAsync();
      const dados = JSON.parse(fileContents);

      const response = await fetch('http://sua-api.com/salvar-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Dados enviados com sucesso!');
      } else {
        Alert.alert('Erro', 'Erro ao enviar dados para a API.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro inesperado.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Selecionar Arquivo" onPress={selecionarArquivo} />
      <Button title="Enviar para API" onPress={enviarParaAPI} />
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLargura: {
    width: '95%',
    justifyContent: 'center',
  },
  titleConteudo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    height: 45,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    color: '#4054F7',
    borderWidth: 1,
    borderColor: '#4D95F7',
    borderRadius: 8,
  },
  titleInfo: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#4096F7',
    marginBottom: 1
  },
  button: {
    // alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    // width: "100%",
    height: 45,
    backgroundColor: "#4096F7",
    borderRadius: 8,
    elevation: 5,
    // shadowOpacity: 1,
    // shadowColor: 'black',
    // shadowRadius: 5,
    // gap: 10,
    padding: 10,
    marginTop: 25,
    marginBottom: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  topo:{
    alignItems:'center',
    justifyContent:'center',
  }
});



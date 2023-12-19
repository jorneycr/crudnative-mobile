import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Headline, TextInput} from 'react-native-paper';
import globalStyles from '../../styles/global';

const NuevoCliente = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const guardarCliente = () => {
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      Alert.alert('Campos Vacios', 'Los campos no puede estar vacios');
      return;
    }
    const cliente = {
      nombre,
      telefono,
      correo,
      empresa,
    };
  };
  return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>Nuevo Cliente</Headline>
        <TextInput
          style={styles.input}
          label="Nombre"
          placeholder="Jorney"
          value={nombre}
          onChangeText={texto => setNombre(texto)}
        />
        <TextInput
          style={styles.input}
          label="Telefono"
          placeholder="584412"
          value={telefono}
          onChangeText={texto => setTelefono(texto)}
        />
        <TextInput
          style={styles.input}
          label="Correo"
          placeholder="correo@Correo.com"
          value={correo}
          onChangeText={texto => setCorreo(texto)}
        />
        <TextInput
          style={styles.input}
          label="Empresa"
          placeholder="Empresa"
          value={empresa}
          onChangeText={texto => setEmpresa(texto)}
        />
        <Button
          icon="pencil-circle"
          mode="contained"
          onPress={() => guardarCliente()}>
          Guardar Cliente
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;

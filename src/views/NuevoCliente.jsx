import React, {useState} from 'react';
import {Alert, Platform, ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Headline,
  TextInput,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import globalStyles from '../../styles/global';
import axios from 'axios';

const NuevoCliente = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);

  const guardarCliente = async () => {
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;
    }
    const cliente = {
      nombre,
      telefono,
      correo,
      empresa,
    };

    try {
      const res = await axios.post(
        'http://192.168.20.62:3000/clientes',
        cliente,
      );
      console.log(res);
      if (Platform.OS == 'android') {
      } else {
        await axios.post('http://localhost:3000/clientes', cliente);
      }
    } catch (error) {
      console.log(error);
    }
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
        <Portal>
          <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Todos los campos son obligatorios</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlerta(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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

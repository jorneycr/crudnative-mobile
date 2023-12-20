import React, {useEffect, useState} from 'react';
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

const NuevoCliente = ({navigation, route}) => {
  const {guardarConsultarAPI} = route.params;

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);

  useEffect(() => {
    if (route.params.cliente) {
      const {nombre, telefono, correo, empresa} = route.params.cliente;
      setNombre(nombre);
      setTelefono(telefono);
      setCorreo(correo);
      setEmpresa(empresa);
    }
  }, []);

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

    if (route.params.cliente) {
      const {id} = route.params.cliente;
      cliente.id = id;
      try {
        if (Platform.OS == 'android') {
          await axios.put(`http://192.168.0.6:3000/clientes/${id}`, cliente);
        } else {
          await axios.put(`http://localhost:3000/clientes/${id}`, cliente);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (Platform.OS == 'android') {
          await axios.post('http://192.168.0.6:3000/clientes', cliente);
        } else {
          await axios.post('http://localhost:3000/clientes', cliente);
        }
      } catch (error) {
        console.log(error);
      }
    }

    navigation.navigate('Inicio');

    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');

    guardarConsultarAPI(true);
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

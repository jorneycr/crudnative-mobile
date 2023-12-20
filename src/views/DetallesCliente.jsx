import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Headline, Subheading, Text, Button} from 'react-native-paper';
import globalStyles from '../../styles/global';
import axios from 'axios';

const DetallesCliente = ({navigation, route}) => {
  const {guardarConsultarAPI} = route.params;
  const {nombre, telefono, correo, empresa, id} = route.params.item;
  const confirmacion = () => {
    Alert.alert('Eliminar', 'Un Cliente elimiinado no se puede recuperar', [
      {
        text: 'Si, Elminar',
        onPress: () => eliminarContacto(),
      },
      {text: 'Cancelar', style: 'cancel'},
    ]);
  };

  const eliminarContacto = async () => {
    const url = `http://192.168.20.62:3000/clientes/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Inicio');
    guardarConsultarAPI(true);
  };
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa}</Subheading>{' '}
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading>{correo}</Subheading>{' '}
      </Text>
      <Text style={styles.texto}>
        Telefono: <Subheading>{telefono}</Subheading>{' '}
      </Text>
      <Button
        style={styles.boton}
        mode="contained"
        icon="cancel"
        onPress={() => confirmacion()}>
        Eliminar Cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 22,
  },
  boton: {
    marginTop: 50,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;

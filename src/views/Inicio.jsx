import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Headline, List, Button} from 'react-native-paper';
import globalStyles from '../../styles/global';

const Inicio = ({navigation}) => {
  const [clientes, setClientes] = useState({});
  const [consultarAPI, guardarConsultarAPI] = useState(true);

  useEffect(() => {
    const obtenerClentesApi = async () => {
      try {
        const res = await axios.get('http://192.168.20.62:3000/clientes');
        if (res.status === 200) {
          setClientes(res.data);
          guardarConsultarAPI(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (consultarAPI) {
      obtenerClentesApi();
    }
  }, [consultarAPI]);

  return (
    <View style={globalStyles.contenedor}>
      <Button
        icon="plus-circle"
        mode="contained"
        onPress={() =>
          navigation.navigate('NuevoCliente', {guardarConsultarAPI})
        }>
        Nuevo Cliente
      </Button>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'No hay Clentes'}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={cliente => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item title={item.nombre} description={item.empresa} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Inicio;

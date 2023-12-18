import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const NuevoCliente = () => {
  return (
    <View style={styles.contenedor}>
      <Text>NuevoCliente</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NuevoCliente;

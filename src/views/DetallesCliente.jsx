import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const DetallesCliente = () => {
  return (
    <View style={styles.contenedor}>
      <Text>DetallesCliente</Text>
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

export default DetallesCliente;

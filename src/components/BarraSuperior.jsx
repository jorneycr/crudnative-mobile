import React from 'react';

import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };
  return (
    <Button icon="plus-circle" textColor="black" onPress={() => handlePress()}>
      Cliente
    </Button>
  );
};

export default BarraSuperior;

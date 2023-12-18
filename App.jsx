import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Inicio from './src/views/Inicio';
import NuevoCliente from './src/views/NuevoCliente';
import DetallesCliente from './src/views/DetallesCliente';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="NuevoCliente"
          component={NuevoCliente}
          options={{title: 'Nuevo Cliente'}}
        />
        <Stack.Screen
          name="DetallesCliente"
          component={DetallesCliente}
          options={{title: 'Detalles Cliente'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

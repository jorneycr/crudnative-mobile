import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from './src/views/Inicio';
import NuevoCliente from './src/views/NuevoCliente';
import DetallesCliente from './src/views/DetallesCliente';
import BarraSuperior from './src/components/Barra';

const Stack = createNativeStackNavigator();

// definir tema
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          options={({navigation, route}) => ({
            headerLeft: props => (
              <BarraSuperior {...props} navigation={navigation} route={route} />
            ),
          })}
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

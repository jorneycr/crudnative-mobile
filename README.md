This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npx react-native@latest init crudnative
```

````bash
# using npm
npm start

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
````

## React navigator

### Dependecies

```bash

# You must install all of them to make it works
npm i @react-navigation/native

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack


# Then Rebuild your app
npx react-native run-android

```

### Configuration for android

```bash

# In android\app\src\main\java\com\reactnatigation\MainActivity.kt

import android.os.Bundle;


# inside of the MainActivity: ReactActivity() { .... }, add at the end the next code

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
}

```

### Set React navigator

```bash
# In App.jsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/views/Home';
import About from './src/views/About';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


```

### Oficial Documentation

`https://reactnavigation.org/docs/hello-react-navigation`

## Icons

### Dependencies

```bash
npm install react-native-vector-icons

```

### Set Up Android

```bash

# In android\app\build.gradle

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```

`https://oblador.github.io/react-native-vector-icons/`

## Set up Fake API in 30 seg

### Dependencies

```bash
npm install -g json-server

```

### Create a file in the projet's root

```bash
db.json
```

### Run Fake API

```bash
json-server db.json

```

### End-Points

[Get Clientes](http://localhost:3000/clientes)

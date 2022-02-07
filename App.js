import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';


function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* aqui lo que va en el medio de la pantalla */}
      <Image 
           
          
      />

      <br/>
      <text>Nombres:</text>
      <text>Luis Alejnadro Paulino Duverge</text><br/>
      <text>Matricula:</text>
      <text>2019-7391</text><br/>
      <text>Correo:</text>
      <text >Duvergejose022@gmail.com</text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <text>Sumadora de Numeros</text>
       
    </View>
  );
}


const Drawer = createDrawerNavigator();



export default function App() {

 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sumadora" component={NotificationsScreen} />
        <Drawer.Screen name="Traductor De Numeros" component={NotificationsScreen} />
        <Drawer.Screen name="Tabla Multiplicar" component={NotificationsScreen} />
        <Drawer.Screen name="video Explicativo" component={NotificationsScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
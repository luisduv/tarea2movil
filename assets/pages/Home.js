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
      <Text>Nombres:</Text>
      <Text>Luis Alejnadro Paulino Duverge</Text><br/>
      <Text>Matricula:</Text>
      <Text>2019-7391</Text><br/>
      <Text>Correo:</Text>
      <Text >Duvergejose022@gmail.com</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Sumadora de Numeros</Text>
       
    </View>
  );
}

function TraductorScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Traductor de numeros</Text>
       
    </View>
  );
}


function TablaMultiplicarScreen({ navigation }) {

 
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Tabla Multiplicar</Text>
       
    </View>
  );
}


function VideoScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Video Explicativo</Text>
       
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
        <Drawer.Screen name="Traductor De Numeros" component={TraductorScreen} />
        <Drawer.Screen name="Tabla Multiplicar" component={TablaMultiplicarScreen} />
        <Drawer.Screen name="video Explicativo" component={VideoScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
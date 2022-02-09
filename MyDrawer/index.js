import React, { useState } from 'react';
import source from '../assets/imagen/fotoluis.png'
import { Button, View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 100,
    resizeMode: 'stretch',
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , ...styles.container}}>
      {/* aqui lo que va en el medio de la pantalla */}
      <Image style={styles.stretch}
      source={source}
      />
      <br />
      <Text>Nombres:</Text>
      <Text>Luis Alejnadro Paulino Duverge</Text><br />
      <Text>Matricula:</Text>
      <Text>2019-7391</Text><br />
      <Text>Correo:</Text>
      <Text >Duvergejose022@gmail.com</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  const [state1, setState1] = React.useState()
  const [state2, setState2] = React.useState()
  const [state3, setState3] = React.useState()

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'black',
      borderWidth: 1
    },
    boton: {
      backgroundColor: 'skyblue',
      paddingTop: 15,
      paddingBottom: 15
    },
    Textboton: {
      textAlign: 'center',
      color: 'white'
    }
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Sumadora de Numeros</Text><br />
      <Text>Primer Numero</Text><br />
      <TextInput
        style={[styles.input]}
        placeholder='numero1'
        placeholderTextColor="grey"
        value={state1}
        onChangeText={(value) => { setState1(value) }}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <br />
      <Text>Segundo Numero</Text><br />
      <TextInput
        style={[styles.input]}
        placeholder='numero2'
        placeholderTextColor="grey"
        value={state2}
        onChangeText={(value) => { setState2(value) }}
        autoCorrect={false}
        autoCapitalize='none'
      /><br />
      <Text>Resultado</Text>
      <Text >{state3}</Text> <br />
      <TouchableHighlight
        onPress={() => setState3(Number(state1) + Number(state2))}
        style={[styles.boton]}
      >
        <Text style={[styles.Textboton]}>Operacion</Text>
      </TouchableHighlight>
    </View>
  );
}










function TraductorScreen({ navigation }) {
  const [statetra, setStatetra] = React.useState()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Traductor de numeros</Text><br />
      <Text>Numero a Traducir</Text>
      <TextInput
       style={{ height: 40,borderColor: 'black',borderWidth: 1}}
       placeholder='numero a Traducir'
       placeholderTextColor="grey"
       value={statetra}
       onChangeText={(value) => { setStatetra(value) }}
       autoCorrect={false}
       autoCapitalize='none'
      ></TextInput>
    </View>
  );
}















function TablaMultiplicarScreen({ navigation }) {
  const [statenum, setStatenum] = React.useState()
  const MultiplicationTable = ({ totalLines, num }) => [...Array(totalLines).keys()].map(x => <Text>{num} X {x} = { Number(num) * x } </Text> );
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Tabla Multiplicar</Text><br /><br />
      <Text>Digita el numero a multiplicar </Text>
      <TextInput
        style={{  height: 40,borderColor: 'black',borderWidth: 1}}
        placeholder='Numero a Multiplicar'
        placeholderTextColor="grey"
        value={statenum}
        onChangeText={(value) => { setStatenum(value) }}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <br /><br />
      {/* { [1,2,3,4,5,6,7,8,9,10,11,12,13].map(x => <Text>{statenum} X {x} = { Number(statenum) * x }</Text> )  } */}
      <MultiplicationTable totalLines={14} num={statenum}/>
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



export default function MyDrawer() {
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
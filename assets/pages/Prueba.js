import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

import { Component } from 'react/cjs/react.production.min';


const Prueba = createDrawerNavigator();


 class Prueba extends Component() {



    HomeScreen = ({ navigation }) => {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* aqui lo que va en el medio de la pantalla */}
                <Image


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


    



    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                   
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

}

export default Prueba;
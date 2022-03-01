import React, { useState } from 'react';
import source from '../assets/imagen/fotoluis.png';
import source2 from '../assets/imagen/lostinspace.gif';
import source3 from '../assets/imagen/jhon.jpg';
import sorce4 from '../assets/imagen/x.png';
import will from '../assets/imagen/will.jpg';
import judy from '../assets/imagen/yudy.jpg';
import robot from '../assets/imagen/robot.gif';
import judymomento from '../assets/imagen/judymometno.gif';
import robotfoto from '../assets/imagen/robotfoto.jpg';
import jhonmometno from '../assets/imagen/jhonnmomento.gif'
import fondo2 from '../assets/imagen/fondo2.gif';
import final from '../assets/imagen/giffinal.gif';
import { Button, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Alert, Modal } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ReactPlayer from 'react-player';
import NumeroALetras from '../assets/pages/Conver';
import convertir from '../assets/pages/Conver';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

//import {Card} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 100,
    resizeMode: 'stretch',
  },
  modalbackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20
  },
  header: {
    width: '100%',
    height: '40',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

function HomeScreen({ navigation }) {//Luis Alejandro Paulino 2019-7391
  return (
    <ImageBackground source={source2} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', ...styles.container }}>
      {/* aqui lo que va en el medio de la pantalla */}
      <Image style={styles.stretch}
        source={source}
      />
      <br />
      <Text style={{ color: 'white' }}>Nombres:</Text>
      <Text style={{ color: 'white' }}>Luis Alejnadro Paulino Duverge</Text><br />
      <Text style={{ color: 'white' }}>Matricula:</Text>
      <Text style={{ color: 'white' }}>2019-7391</Text><br />
      <Text style={{ color: 'white' }}>Correo:</Text>
      <Text style={{ color: 'white' }}>Duvergejose022@gmail.com</Text>
    </ImageBackground>
  );
}

function PaginaPrincipalScreen({ navigation }) {//Luis Alejandro Paulino 2019-7391
  const [visiblew, setVisiblew] = React.useState(false);
  const [visiblej, setVisiblej] = React.useState(false);
  const [visible, setVisible] = React.useState(false);


  return (
    <ImageBackground source={source2} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', ...styles.container }}>




      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Will</Title>
        </Card.Content>
        <MyComponentw visible={visiblew}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisiblew(false)}>
                <Image style={{ height: 25, width: 25 }} source={sorce4} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 110, width: 110, borderWidth: 5, borderColor: 'black', marginBottom: 5 }} source={will} />
              <Text>¿Qué fue de Will Robinson?
                Will es apuñalado dos veces en el corazón por SAR en los últimos episodios de la tercera temporada. Tras intentar inicialmente enfrentarse al Robot Alienígena y llegar a un entendimiento</Text>
            </View>
          </View>
        </MyComponentw>
        <TouchableHighlight onPress={() => setVisiblew(true)}>
          <Card.Cover   style={{ borderWidth: 5, borderColor: 'white' }} source={will} />
        </TouchableHighlight>
      </Card>







      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Judy</Title>
        </Card.Content>
        <MyComponentj visible={visiblej}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisiblej(false)}>
                <Image style={{ height: 25, width: 25 }} source={sorce4} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 110, width: 110, borderWidth: 5, borderColor: 'black', marginBottom: 5 }} source={judy} />
              <Text>Judy es la única médica entrenada que sobrevivió y ahora responsable de la salud de todo el equipo. Definida como un personaje que siempre va hacia adelante y busca superarse constantemente, promete convertirse en uno de los favoritos y más atractivos de esta remake.</Text>
            </View>
          </View>
        </MyComponentj>
        <TouchableHighlight onPress={() => setVisiblej(true)}>
          <Card.Cover style={{ borderWidth: 5, borderColor: 'white' }} source={judy} />
        </TouchableHighlight>
      </Card>








      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>John</Title>
        </Card.Content>
        <MyComponent visible={visible}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image style={{ height: 25, width: 25 }} source={sorce4} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 110, width: 110, borderWidth: 5, borderColor: 'black', marginBottom: 5 }} source={source3} />
              <Text>John Robinson es el del padre y esposo virtualmente perfecto, teniendo una excelente relación con su esposa, hijos y una buena relación de amigo con el mayor Don West, la película presenta una persona más realista con discusiones frecuentes entre él y los miembros de su familia</Text>
            </View>
          </View>
        </MyComponent>
        <TouchableHighlight onPress={() => setVisible(true)}>
          <Card.Cover  style={{ borderWidth: 5, borderColor: 'white' }} source={{ uri: 'https://i.pinimg.com/564x/2f/89/41/2f8941c0f03dd8f1b77bce2647529498.jpg' }} />
        </TouchableHighlight>
      </Card>





    </ImageBackground>
  );
}


const MyComponentw = ({ visible, children }) => {
  const [showmodal, setShowmodal] = useState(visible);
  React.useEffect(() => {
    toggleModalw();
  }, [visible]);
  const toggleModalw = () => {
    if (visible) {
      setShowmodal(true);
    } else {
      setShowmodal(false)
    }
  }
  return (
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  )
};

const MyComponentj = ({ visible, children }) => {
  const [showmodal, setShowmodal] = useState(visible);
  React.useEffect(() => {
    toggleModalj();
  }, [visible]);
  const toggleModalj = () => {
    if (visible) {
      setShowmodal(true);
    } else {
      setShowmodal(false)
    }
  }
  return (
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  )
};

const MyComponent = ({ visible, children }) => {
  const [showmodal, setShowmodal] = useState(visible);
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowmodal(true);
    } else {
      setShowmodal(false)
    }
  }
  return (
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  )
};

const MyComponentm1 = ({ visible, children }) => {
  const [showmodal, setShowmodal] = useState(visible);
  React.useEffect(() => {
    toggleModalm1();
  }, [visible]);
  const toggleModalm1 = () => {
    if (visible) {
      setShowmodal(true);
    } else {
      setShowmodal(false)
    }
  }
  return (
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  )
};

const MyComponentm2 = ({ visible, children }) => {
  const [showmodal, setShowmodal] = useState(visible);
  React.useEffect(() => {
    toggleModalm2();
  }, [visible]);
  const toggleModalm2 = () => {
    if (visible) {
      setShowmodal(true);
    } else {
      setShowmodal(false)
    }
  }
  return (
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  )
};

const MyComponentm3 = ({ visible, children }) => {
  const [showmodal, setShowmodal] = useState(visible);
  React.useEffect(() => {
    toggleModalm3();
  }, [visible]);
  const toggleModalm3 = () => {
    if (visible) {
      setShowmodal(true);
    } else {
      setShowmodal(false)
    }
  }
  return (
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  )
};



function NotificationsScreen({ navigation }) {
  

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

  const [visiblem1, setVisiblem1] = React.useState(false);
  const [visiblem2, setVisiblem2] = React.useState(false);
  const [visiblem3, setVisiblem3] = React.useState(false);


  return (
    <ImageBackground source={fondo2} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', ...styles.container }}>




      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Momento 1</Title>
        </Card.Content>
        <MyComponentm1 visible={visiblem1}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisiblem1(false)}>
                <Image style={{ height: 25, width: 25 }} source={sorce4} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 110, width: 110, borderWidth: 5, borderColor: 'black', marginBottom: 5 }} source={robotfoto} />
              <Text>En este momento el robot habia echo algo divertido con will el cual este momento me gusto mucho por la empatia entre will y el robot</Text>
            </View>
          </View>
        </MyComponentm1>
        <TouchableHighlight onPress={() => setVisiblem1(true)}>
          <Card.Cover   style={{ borderWidth: 5, borderColor: 'white' }} source={robot} />
        </TouchableHighlight>
      </Card>







      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Momento 2</Title>
        </Card.Content>
        <MyComponentm2 visible={visiblem2}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisiblem2(false)}>
                <Image style={{ height: 25, width: 25 }} source={sorce4} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 110, width: 110, borderWidth: 5, borderColor: 'black', marginBottom: 5 }} source={judy} />
              <Text>Me gusta este momento porque judy habia logrado correr una larga distancia para salvar a su padrastro el cual por ese trancurso nos dio una buena ensenaza de que nunca nos podemos rendir </Text>
            </View>
          </View>
        </MyComponentm2>
        <TouchableHighlight onPress={() => setVisiblem2(true)}>
          <Card.Cover style={{ borderWidth: 5, borderColor: 'white' }} source={judymomento} />
        </TouchableHighlight>
      </Card>








      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Momento 3</Title>
        </Card.Content>
        <MyComponentm3 visible={visiblem3}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisiblem3(false)}>
                <Image style={{ height: 25, width: 25 }} source={sorce4} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 110, width: 110, borderWidth: 5, borderColor: 'black', marginBottom: 5 }} source={source3} />
              <Text>Me gusta este momento porque nos ensena a amar y a estar en familia y amarnos a todos</Text>
            </View>
          </View>
        </MyComponentm3>
        <TouchableHighlight onPress={() => setVisiblem3(true)}>
          <Card.Cover  style={{ borderWidth: 5, borderColor: 'white' }} source={jhonmometno} />
        </TouchableHighlight>
      </Card>





    </ImageBackground>
  );
}










function TraductorScreen({ navigation }) {
  

  return (
    <ImageBackground source={final} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', ...styles.container }}>




      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none' }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 19, textAlign: 'center', }}>La serie cuenta con 3 temporadas El Creador es : (Irwin Allen)</Title>
          
          <Text  style={{ color: 'white',fontSize: 20, textAlign: 'center' }}>Lost in space se trata de una familia que son muy unidos y estan  De camino a una colonia espacial, un terrible accidente deja varados a los Robinson en un planeta desconocido, donde tendrán que luchar por superar su primera noche. Otros viajeros hacen su aparición, tras estrellarse en el planeta. Los Robinson se afanan por recuperar su nave con la ayuda de un misterioso compañero.</Text>
        </Card.Content>
        
       
      </Card>



    </ImageBackground>
  )
}















function TablaMultiplicarScreen({ navigation }) {//Luis Alejandro Paulino 2019-7391
 
  return (
    <ImageBackground source={final} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', ...styles.container }}>




      <Card style={{ width: 200, marginBottom: 5, backgroundColor: 'none',borderWidth: 5, borderColor: 'white', }}>
        <Card.Content>
          <Title style={{ color: 'white', fontSize: 30, textAlign: 'center', marginBottom:15 }}>Mi serie Favorita</Title>
          
          <Text  style={{ color: 'white',fontSize: 20, textAlign: 'center' }}>Lost in space es mi serie favorita porque es una de las pocas que e visto y me ha dejado un mensaje familiar y hermoso tambien es una serie familiar para todo tipo de publico y la serie se ve muy real</Text>
        </Card.Content>
        
       
      </Card>



    </ImageBackground>
  )
  
}




const Drawer = createDrawerNavigator();



export default function MyDrawer() {//Luis Alejandro Paulino 2019-7391
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Personajes">
        <Drawer.Screen name='Personajes' component={PaginaPrincipalScreen} />
        <Drawer.Screen name="Mi Informacion" component={HomeScreen} />
        <Drawer.Screen name="Momentos" component={NotificationsScreen} />
        <Drawer.Screen name="Acerca De La Serie" component={TraductorScreen} />
        <Drawer.Screen name="Porque es mi serie favorita" component={TablaMultiplicarScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import React, {useState} from 'react'
import { SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
  TouchableHighlight, 
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,

} from "react-native";
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';




const Reportes = (props) => {

  const [isPermitted, setIsPermitted] = useState(false);
  const [captureImages, setCaptureImages] = useState([]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permisos de la camara',
          message: 'La app necesita permisos para la camara',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestExternalWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permisos para excribir en la memoria externa',
          message: 'La app necesita permisos de escritura',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  };
  
  const requestExternalReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permisos para leer memoria externa',
          message: 'La app necesita permisos para leer memoria externa',
        },
      );
      // If READ_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Read permission err', err);
    }
    return false;
  };
  
  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        if (await requestExternalWritePermission()) {
          if (await requestExternalReadPermission()) {
            setIsPermitted(true);
          } else alert('Permisos denegados para ver memoria externa');
        } else alert('Permisos denegados para guardar memoria externa');
      } else alert('Permisos denegados para usar la camara');
    } else {
      setIsPermitted(true);
    }
  };
  
  const onBottomButtonPressed = (event) => {
    const images = JSON.stringify(event.captureImages);
    if (event.type === 'left') {
      setIsPermitted(false);
    } else if (event.type === 'right') {
      setIsPermitted(false);
      setCaptureImages(images);
    } else {
      Alert.alert(
        event.type,
        images,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
    
  const [titulo, setTitulo] = React.useState('');

  const [text, setText] = React.useState('');
  
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

    return(
      
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback>
          {isPermitted ? (
            <View style={{flex: 1}}>
              <CameraKitCameraScreen
                // Buttons to perform action done and cancel
                actions={{
                  rightButtonText: 'Hecho',
                  leftButtonText: 'Cancelar'
                }}
                onBottomButtonPressed={
                  (event) => onBottomButtonPressed(event)
                }
                flashImages={{
                  // Flash button images
                  on: require('../assets/flashon.png'),
                  off: require('../assets/flashoff.png'),
                  auto: require('../assets/flashauto.png'),
                }}
                cameraFlipImage={require('../assets/flip.png')}
                captureButtonImage={require('../assets/capture.png')}
              />
            </View>
          ) : (
            
              <View >
                
                <Text style={styles.titleText}>¡Sube un reporte de la ciudad!</Text>
                
                <View style={{ alignItems: 'flex-end'}}> 
                  <TouchableOpacity style={{width: 100, height: 50, justifyContent:'center', backgroundColor: '#b3282d',alignItems: 'center',  marginTop: 5, }}>
                    <Text style={{color: 'white',}}>Enviar reporte</Text>
                  </TouchableOpacity>
                </View>
                {/* <Text style={styles.textStyle}>{captureImages}</Text> */}
                <View style={{ justifyContent:'center', alignItems: 'flex-start', marginBottom: 10, marginTop: 5, }}>
                  <TouchableHighlight
                      onPress={openCamera}
                      style={styles.buttonStyle}
                    >
                    <Text style={styles.buttonTextStyle}>Abrir camara</Text>
                  </TouchableHighlight>
                </View>
                <ScrollView>
                <View style={styles.container}>
                  
                  <View style={{ alignItems: 'flex-start', padding:5, paddingEnd: 230 }}>
                    <Text >Título: </Text>
                  </View>
                  <TextInput
                    style={{backgroundColor: 'skyblue', width: '75%', borderRadius: 5}}
                    placeholder="Ponga el título aquí"
                    placeholderTextColor="black"
                    multiline={false}
                    label="titulo"
                    value={titulo}
                    onChangeText={text => setTitulo(text)}
                  />
                  <Text style={{paddingTop:15, paddingBottom: 5, paddingEnd: 200 }}>Descripción</Text>
                  <TextInput
                    style={{backgroundColor: 'skyblue', width: '75%', borderRadius: 5}}
                    placeholder="Ponga el contexto aquí"
                    multiline={true}
                    numberOfLines = {5}
                    label="texto"
                    value={text}
                    onChangeText={text => setText(text)}
                  />
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Selecciona una imagen</Text>
                  </TouchableOpacity>
                </View>
                </ScrollView>
              </View>
            
          )}
      </TouchableWithoutFeedback>
    </SafeAreaView>
    )
}



export default Reportes;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#808285',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#b3282d',
    padding: 5,
    
    minWidth: 120,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',

  },
});
import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { Auth } from 'aws-amplify';
import {FormStyles} from '../styles/FormStyles'

const Alarma = (props) => {

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const showAlert = () =>{
        Alert.alert(
           '¡Resguardate!'
        )
     }

    return(
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Pantalla de alarma</Text>
            <TouchableOpacity onPress={() => Alert.alert('¡Resguardate!')} >
                <Image style={{width: 300, height: 300}} source={require('../imagenes/botonAlerta.png')} />
            </TouchableOpacity>

            
            <View>

                <TouchableOpacity style={FormStyles.button} 
                    onPress={ () => signOut()}>
                    <Text style={FormStyles.buttonText}>Salir D:</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Alarma;
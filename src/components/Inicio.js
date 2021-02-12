import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, 
    Alert } from 'react-native'
import { Auth } from 'aws-amplify';
import {FormStyles} from '../styles/FormStyles'

export function Inicio(props){

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    if(props.authState === 'signedIn')
        return(
            <View>
                <Text>aquí notis</Text>

                <TouchableOpacity style={FormStyles.button} 
                    onPress={ () => signOut()}>
                    <Text style={FormStyles.buttonText}>Salir D:</Text>
                </TouchableOpacity>
            </View>
        )
    else return <></>
}
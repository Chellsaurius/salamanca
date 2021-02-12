import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, 
    Alert } from 'react-native'
import { validateEmail} from '../validation'
import { Auth } from 'aws-amplify'
import {FormStyles} from '../styles/FormStyles'


export default function ConfirmSignUp(props) {
    const [state, setState] = useState({
        email: '',
        confirmationCode: '',
    })
    const [error, setErrors] = useState({email: ''})

    async function onSubmit() {
        const { email: username, confirmationCode: code } = state
        const emailError = validateEmail(state.email)
        
        if(emailError)
            setErrors({ email: emailError});
        else
        {
            try {
                const user = await Auth.confirmSignUp(username, code)
                setState({confirmationCode: ''})
                props.onStateChange('signIn');
            }
            catch(error){
                Alert.alert(error.message)
            }
        }
    }

    if(props.authState === 'confirmSignUp')
    return (
        <View style={FormStyles.container}>
            <Text style={FormStyles.title}>Confirma tu registro!</Text>
            <Text style={FormStyles.label}>Correo electrónico</Text>
            <TextInput
                style={FormStyles.input}
                onChangeText={text => setState({...state, email: text.toLocaleLowerCase()})}
                placeholder="Ingresa tu email"
                value={state.email}
                />
            <Text style={FormStyles.error}>{error.email}</Text>

            <Text style={FormStyles.label}>Código de confirmación</Text>
            <TextInput
                style={FormStyles.input}
                onChangeText={text => setState({...state, confirmationCode: text})}
                placeholder="Ingresa tu código de confirmación"
                value={state.confirmationCode}
                />
            <Text style={FormStyles.error}>{error.confirmationCode}</Text>

            <TouchableOpacity style={FormStyles.button} 
                onPress={ () => onSubmit()}>
                <Text style={FormStyles.buttonText}>Confirma tu registro</Text>
            </TouchableOpacity>

            <View style={FormStyles.links}>
                <Button
                    color="#808285"
                    title="Inicio de sesión"  
                    accessibilityLabel="Regresa a Inicio de sesión" 
                    onPress={ () => props.onStateChange('signIn', {})}
                >
                </Button>
            
                <Button
                    color="#808285"
                    title="Regresa a Registrarte"  
                    accessibilityLabel="Regresa a Registrarte" 
                    onPress={ () => props.onStateChange('signUp', {})}
                >
                </Button>
            </View>
        </View>
    )
    else return <></>
}


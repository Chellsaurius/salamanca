import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, 
    Alert } from 'react-native'
import { validatePassword, validateEmail} from '../validation'
import { Auth } from 'aws-amplify'
import {FormStyles} from '../styles/FormStyles'


export default function SignUp(props) {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const [error, setErrors] = useState({email: '', password: ''})

    async function onSubmit() {
        const emailError = validateEmail(state.email)
        const passwordError = validatePassword(state.password)
        if(emailError || passwordError )
            setErrors({ email: emailError, password: passwordError});
        else
        {
            try {
                const user = await Auth.signUp({
                username: state.email,
                password: state.password,
            })
            props.onStateChange('confirmSignUp', user)
            }
            catch(error){
                Alert.alert(error.message)
            }
        }
    }

    if(props.authState === 'signUp')
    return (
        <View style={FormStyles.container}>
            <Text style={FormStyles.title}>Registrate!</Text>
            <Text style={FormStyles.label}>Correo electrónico</Text>
            <TextInput
                style={FormStyles.input}
                onChangeText={text => setState({...state, email: text.toLocaleLowerCase()})}
                placeholder="Ingresa tu email"
                value={state.email}
                />
            <Text style={FormStyles.error}>{error.email}</Text>

            <Text style={FormStyles.label}>Contraseña</Text>
            <TextInput
                style={FormStyles.input}
                onChangeText={text => setState({...state, password: text})}
                placeholder="Ingresa tu constraseña"
                value={state.password}
                secureTextEntry={true}
                />
            <Text style={FormStyles.error}>{error.password}</Text>

            <TouchableOpacity style={FormStyles.button} 
                onPress={ () => onSubmit()}>
                <Text style={FormStyles.buttonText}>Registrarse</Text>
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
                    title="Confirma tu código"  
                    accessibilityLabel="Regresa a Inicio de sesión" 
                    onPress={ () => props.onStateChange('confirmSignUp', {})}
                >
                </Button>
            </View>
        </View>
    )
    else return <></>
}


import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, 
    Alert } from 'react-native'
import { validatePassword, validateEmail} from '../validation'
import { Auth } from 'aws-amplify'
import {FormStyles} from '../styles/FormStyles'


export default function SignIn(props) {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    async function signIn() {
      try {
          const user = await Auth.signIn(username, password);
      } catch (error) {
          console.log('error signing in', error);
      }
    }

    if(props.authState === 'signIn')
      return (
          <View style={FormStyles.container}>
              <Text style={FormStyles.title}>Inicio de sesión!</Text>
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
                  onPress={ () => signIn()}>
                  <Text style={FormStyles.buttonText}>Ingresa</Text>
              </TouchableOpacity>

              <View style={FormStyles.links}>
                  <Button
                      color="#808285"
                      title="Olvidé mi contraseña"  
                      accessibilityLabel="Ir a recuperar tu contraseña" 
                      onPress={ () => props.onStateChange('ForgotPassword', {})}
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


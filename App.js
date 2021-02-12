import 'react-native-gesture-handler'

import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, LogBox, Button, Linking } from 'react-native'
import Amplify, { Auth, Hub } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { 
  Authenticator,
  SignIn,
  
  ConfirmSignIn,

  ForgotPassword,
} from 'aws-amplify-react-native'
import SignUp from './src/components/SignUp'
import ConfirmSignUp from './src/components/ConfirmSignUp'
import config from  './src/aws-exports'
import { AuthPiece } from 'aws-amplify-react-native/dist/Auth'
import { Inicio } from './src/components/Inicio'
// import InAppBrowser from 'react-native-inappbrowser-reborn'

import Navigation from './src/components/Navigation'
import UserContext from './src/UserContext'


Amplify.configure(awsconfig); 

LogBox.ignoreAllLogs = true;

function Home(props){
  if(props.authState === 'signedIn')
  return <UserContext.Provider value={props.authData}>
    <Navigation {...props}/>
  </UserContext.Provider>
  else return <></>
}


export default function App() {

  return (
    <View style={styles.container}>
      <Authenticator 
      usernameAttributes="email" 
      hideDefault={true} 
      authState="signIn"
      onStateChange={(authState) => console.log('authState ...', authState)}>
        <Home />
        <SignUp />
        <SignIn />
        <ConfirmSignUp />
        <ConfirmSignIn />
        <ForgotPassword />
        
      </Authenticator>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Dimensions } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Noticias from '../screens/Noticias'
import Encuestas from '../screens/Encuestas'
import Alarma from '../screens/Alarma'
import Reportes from '../screens/Reportes'

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator()

function NoticiastackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Noticias" component={Noticias} />
        </Stack.Navigator>
    )
}

function EncuestasStackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Encuestas" component={Encuestas} />
        </Stack.Navigator>
    )
}

function ReportesStackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Reportes" component={Reportes} />
        </Stack.Navigator>
    )
}

function AlarmaStackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Alarma" component={Alarma} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigator(props){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
            HeaderTitle: () => <Text>Cabecera</Text>,
            tabBarIcon: ({focused, color, size, padding}) => {
                let iconName;
                if(route.name === 'Noticias') {
                    iconName = focused ? 'newspaper' : 'newspaper-outline'
                }
                else if (route.name === 'Encuestas') {
                    iconName= focused ? 'bar-chart' : 'bar-chart-outline'
                }
                else if (route.name === 'Reportes') {
                    iconName= focused ? 'archive' : 'archive-outline'
                }
                else if (route.name === 'Alarma') {
                    iconName= focused ? 'alert-circle' : 'alert-circle-outline'
                }
                return (
                    <IonicIcon 
                        name={iconName} 
                        size={size} color={color} 
                        style={{paddingBottom: padding}}
                    />
                )
            }
            })}
            tabBarOptions={{
                activeTintColor: 'lightseagreen',
                inactiveTinColor: 'grey',
                labelStyle: {fontSize: 16},
                style: {width: fullScreenWidth}
            }}
            >
                <Tab.Screen name="Noticias" component={NoticiastackScreen} />
                <Tab.Screen name="Encuestas" component={EncuestasStackScreen} />
                <Tab.Screen name="Reportes" component={ReportesStackScreen} />
                <Tab.Screen name="Alarma" component={AlarmaStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
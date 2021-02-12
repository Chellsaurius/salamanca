import { StyleSheet } from 'react-native'
import color from './Colors'

const headerStyles = StyleSheet.create({
    Header: {
        height: 75,
        width: '100%',
        backgroundColor: color.PRIMARYCOLOR,
        flexDirection: 'row',        
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        
    }
})

const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.PRIMARYCOLOR,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.PRIMARYCOLOR,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    },

    newsStyle: {
        width: '75%',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingVertical: '5%',
        borderRadius: 15,
        backgroundColor: color.LIGHTPRIMARYCOLOR,
        marginTop: 10,
    }
    
})

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
        
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        paddingTop: 20,
        alignItems: 'center',
    },

    btnMain: {
        width: '60%',
        marginTop:20,
        marginBottom:5,
        backgroundColor: color.PRIMARYCOLOR,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.PRIMARYCOLOR,
        width: '60%',
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Verdana',
    },

    txtTransparent: {
        color: color.MORENACLARO,
        fontSize: 14,
        fontFamily: 'Verdana',
        paddingBottom:10
    },

    titleText: {
        fontSize: 28,
        marginTop: 5,
        color: color.PRIMARYCOLOR,
        fontFamily: "Verdana"
    },
    
})

export { loginStyles, splashStyles, mainStyles, headerStyles }
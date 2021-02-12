import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const FormStyles = StyleSheet.create({
    container:{
        flex:1,
        height: '100%',
        justifyContent: 'center',
        width: windowWidth,
        padding: 20,

    },
    button: {
        backgroundColor: "#b3282d",
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',

    },
    input:{
        height: 40, 
        borderColor: 'lightgray', 
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center',
        
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: "#b3282d",
        fontWeight: '600',
        textTransform: 'uppercase',

    },
    label: {
        marginLeft: 10,
        marginBottom: 15,

    },
    error: {
        color: 'red',
        paddingBottom: 10,
        marginLeft: 10,

    }
    
})
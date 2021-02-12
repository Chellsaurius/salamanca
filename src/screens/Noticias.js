import React, {Component, useState} from 'react'
import { SafeAreaView, Text, FlatList, TouchableOpacity, View} from "react-native";
import { mainStyles } from '../styles/Styles'
import Color from '../styles/Colors'

const Home = (props) => {
    const [noticias, setNoticias] = useState([
        { title: 'Alista Guanajuato compra de vacunas contra Covid-19 ', prioridad: 2, body: 'huele feo', key: '1' },
        { title: 'Mueren otros 105 guanajuatenses por Covid-19 ', prioridad: 2, body: 'la cartera iba vacía', key: '2' },
        { title: 'Celebra alcaldesa autorización para que estados adquieran vacunas ', prioridad: 4, body: 'Asalto en el banco de la 2° sur y 1° Oriente', key: '3' },
        { title: 'Llega Salamanca a las 430 defunciones y supera los 5500 contagios ', prioridad: 2, body: 'Otra noticia', key: '4' },
        { title: 'Donación de 50 árboles', prioridad: 2, body: 'Nuestro hermoso partido regalará cosas :D', key: '5' },
        { title: 'Huachicolero, una historia de todos los días ', prioridad: 2, body: 'huele feo', key: '6' },
        { title: 'Vicente Fernández saldrá a aclarar escándalo sobre acoso sexual ', prioridad: 2, body: 'la cartera iba vacía', key: '7' },
        { title: 'Planean revivir el universo de Game of thrones ', prioridad: 4, body: 'Asalto en el banco de la 2° sur y 1° Oriente', key: '8' },
        { title: 'Alistan bioserie de Pati Chapoy ', prioridad: 2, body: 'Otra noticia', key: '9' },
        { title: 'Leticia Calderón sale del hospital tras recuperarse de Covid ', prioridad: 2, body: 'Nuestro hermoso partido regalará cosas :D', key: '10' },
        { title: 'Trump el único buen presidente desde hace mucho tiempo', prioridad: 2, body: 'huele feo', key: '11' },
        { title: 'Prueba de Ñóíáéä', prioridad: 2, body: 'la cartera iba vacía', key: '12' },
        { title: 'Nueva cinta de Guillermo del Toro se estrenará en diciembre ', prioridad: 4, body: 'Asalto en el banco de la 2° sur y 1° Oriente', key: '13' },
        { title: 'Museo del Papalote, con plazo de 2 meses para salvarse ', prioridad: 2, body: 'Otra noticia', key: '14' },
        { title: 'Rosalía y Billie Eilish la “rompen” con Lo vas a olvidar ', prioridad: 2, body: 'Nuestro hermoso partido regalará cosas :D', key: '15' },
    ])

    return(
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                style={{ marginBottom: 10}}
                data={noticias}
                renderItem={({ item }) => (
                    <TouchableOpacity /*onPress={() => navigation.navigate('NotiHilo', item)}*/ style={ mainStyles.newsStyle }>
                        <Text style={{width:'50%'}}>{ item.title } </Text>

                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default Home
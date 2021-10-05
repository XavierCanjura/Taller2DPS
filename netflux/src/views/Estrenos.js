import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const dataEstrenos = [
    {
        id: '1',
        titulo: 'GHOSTBUSTERS: AFTERLIFE (Película)',
        descripcion: 'Titulada en español Casafantasmas: más allá es una comedia de ficción sobre fantasmas y seres sobrenaturales.',
        fechaEstreno: '11/11/2021',
        trailer: '19UEx4pU1bo/hq720.jpg'
    },
    {
        id: '2',
        titulo: 'SPIDER-MAN NO WAY HOME (Película)',
        descripcion: 'El Hombre Araña regresa en un nuevo estreno de la exitosa franquicia de superhéroes basada en el personaje de Marvel Comics.',
        fechaEstreno: '17/12/2021',
        trailer: 'rt-2cxAiPJk/hq720.jpg'
    },
    {
        id: '3',
        titulo: 'ENCANTO (Película)',
        descripcion: 'Los Madrigal es una familia extraordinaria que vive en las montañas de Colombia en un precioso lugar oculto llamado Encanto. Cada niño de esta familia posee un don especial excepto Mirabel.',
        fechaEstreno: '24/11/2021',
        trailer: 'E4dCY_DvT-4/hq720.jpg'
    },
    {
        id: '4',
        titulo: 'You (Serie)',
        descripcion: 'Una historia de amor del siglo XXI sobre un obsesivo, pero brillante mánager de 20 años de una librería, quien utiliza la era digital hiperconectada para enamorar a la mujer de sus sueños.',
        fechaEstreno: '15/10/2021',
        trailer: 'NqrlWUmpVLg/hq720.jpg'
    },
    {
        id: '5',
        titulo: 'Legends of Tomorrow (Serie)',
        descripcion: 'El viajero del tiempo Rip Hunter regresa al presente y forma una insólita coalición de superhéroes y villanos para salvar el mundo de un peligro terrible que amenaza con destruir no solo el planeta, sino incluso el propio tiempo.',
        fechaEstreno: '15/10/2021',
        trailer: 'P2z4chki7Ac/hq720.jpg'
    },
    {
        id: '6',
        titulo: 'Luis Miguel, la serie (Serie)',
        descripcion: 'La verdadera historia de Luis Miguel, el máximo ícono de la música en español. Una mirada completa y autorizada por el artista sobre la vida íntima y profesional de este cantante enigmático, elusivo y a la vez adorado.',
        fechaEstreno: '28/10/2021',
        trailer: '7Oj2SNULn8c/hq720.jpg'
    },
]

const Estrenos = () => {

    return(
        <SafeAreaView>
            <FlatList
                data = { dataEstrenos }
                keyExtractor= { ( item ) => item.id }
                renderItem = { ( {item} ) => (
                    <View style = { styles.container }>
                        <View style = { styles.video }>
                            <WebView
                                source={{
                                    uri: `https://www.youtube.com/embed/${item.trailer}`
                                }} 
                            />
                        </View>
                        <View style = { styles.containerInfo }>
                            <Text style ={ styles.texto }>{ item.titulo }</Text>
                            <Text style = {{ textAlign: 'justify', fontSize: 18, marginVertical: 4 }}>{ item.descripcion }</Text>
                            <Text style = {{ fontSize: 16, marginBottom: 4 }}>Fecha de Estreno: { item.fechaEstreno }</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '2%',
        marginVertical: 10,
        borderBottomWidth: 1,
    },
    video: {
        width: '100%',
        height: 200,
    },
    containerInfo:{
        marginTop: 10,
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Estrenos;
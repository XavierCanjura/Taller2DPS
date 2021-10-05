import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


const List = ({ serie }) => {
    return(
        <View style = { styles.containerSerie }>
            <Image
                style = { styles.img } 
                source = {{ uri: `${ serie.img  }` }}
            />
            <View style = { styles.containerInfo}>
                <Text style = { styles.texto }>{ serie.nombre }</Text>
                <Text style = { styles.texto }>{ serie.temporadas } Temporadas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerSerie: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 5,
        marginBottom: 5,
        borderTopWidth: 1,
    },
    img: {
        width: 120,
        height: 100,
        resizeMode: 'stretch',
    },
    containerInfo: {
        position: 'absolute',
        height: 100,
        left: 115,
        right: 0,
        margin: 5,
        justifyContent: 'center',
    },
    texto: {
        paddingLeft: 20,
        fontSize: 20,
        marginVertical: 5,
    }
})

export default List;
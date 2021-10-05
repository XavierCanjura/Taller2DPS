import React from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const Carousel = ({ data, setPreview }) => {
    return(
        <FlatList 
            data = { data }
            horizontal
            keyExtractor = { item => String(item.id) }
            renderItem = { ({ item }) => {
                return(
                    <TouchableHighlight
                        onPress = { () => setPreview(item.trailer) }
                        underlayColor="white"
                    >
                        <View style = { styles.pelicula}>
                            <Image style = { styles.image } source = {{ uri: item.img }} />
                        </View>
                    </TouchableHighlight>
                )
            } }
        />
    )
}

const styles = StyleSheet.create({
    pelicula:{
    },
    image: {
        width: 160,
        height: 200,
        resizeMode: 'contain',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 15,
    }
})

export default Carousel;
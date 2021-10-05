import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, SectionList, TouchableHighlight } from 'react-native';
import Preview from '../components/Preview';
import List from '../components/List';
import ModalView from '../components/ModalView';

const dataSeries = [
    {
        titulo: 'Comedia',
        data: [
            {
                id: 1,
                nombre: 'Brooklyn Nine-Nine',
                img: 'https://1.bp.blogspot.com/-X3n6HaUQamE/WSrS4zn28zI/AAAAAAAAF6A/1fbghUy9SGgY3yTW_UssedAftmOP5jTHACLcB/s1600/brooklyn-nine-nine-poster.jpg',
                trailer: 'sEOuJ4z5aTc/hq720.jpg',
                temporadas: 8
            },
            {
                id: 2,
                nombre: 'Un jefe en pañales: De vuelta a los negocios',
                img: 'https://static.wikia.nocookie.net/doblaje/images/e/e2/Boss-Baby-Back-in-Business-600x378.png/revision/latest?cb=20180306221856&path-prefix=es',
                trailer: 'Si_Ja9lBP54/hq720.jpg',
                temporadas: 4
            },
            {
                id: 3,
                nombre: 'Reunión familiar',
                img: 'https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2019/07/14/Reunion-familiar.png',
                trailer: 'Pun3uB3Mmz8/hqdefault.jpg',
                temporadas: 4
            },
            {
                id: 4,
                nombre: 'Bob Esponja',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-xGXXNh0TH9us9SZcz4jJ5YvKCDF-WQNaADb6G4Z3Ra7LQGXJAOkzG97vGP--_7ZV5o&usqp=CAU',
                trailer: 'BUFKUy_c5Tw/hq720.jpg',
                temporadas: 13
            },
            {
                id: 5,
                nombre: 'Modern Family',
                img: 'data:image/jpeg;base64,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',
                trailer: 'X0lRjbrH-L8/hq720.jpg',
                temporadas: 11
            },
            {
                id: 6,
                nombre: 'Escandalosos',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcemvwksw4lOKL48_-YRIuUhFHoWf8gJCQ7g&usqp=CAU',
                trailer: 'QYSrCLZ1ofs/hq720.jpg',
                temporadas: 4
            },
        ]
    },
    {
        titulo: 'Romance',
        data: [
            {
                id: 1,
                nombre: 'Bridgerton',
                img: 'https://i.blogs.es/e4a6cd/cartel-los-bridgerton/1366_2000.jpeg',
                trailer: 'gpv7ayf_tyE/hq720.jpg',
                temporadas: 1
            },
            {
                id: 2,
                nombre: 'Rétame',
                img: 'https://i.pinimg.com/736x/c0/c9/e9/c0c9e9a197d80a4626c7afcf19374376.jpg',
                trailer: 'zVAZ-Jieg4c/hqdefault.jpg',
                temporadas: 1
            },
            {
                id: 3,
                nombre: "Grey's Anatomy",
                img: 'https://www.terra.cl/u/fotografias/m/2021/3/24/f608x342-9085_38808_0.jpeg',
                trailer: 'q1pcpgREQ5c/hq720.jpg',
                temporadas: 18
            },
            {
                id: 4,
                nombre: '¿Hola? Soy yo',
                img: 'https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*6673*7226_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYHMg4WdjDNu5zwPGeijaMJ6985etD4z4IHTjSd2YzIZkoCz7dTqtkCY7gVaCcfScR93UhDUeTz%5D7%5Dla*8Jr9oLklyTidLSkBPmTxoXThj2b*j3DuTgJpJkxcGoDY.jpg?locale=es',
                trailer: 'OtiD6ww1yeE/hq720.jpg',
                temporadas: 1
            },
            {
                id: 5,
                nombre: 'Start-Up',
                img: 'https://pilartrinidad.com/wp-content/uploads/2020/12/Start-up-drama.jpg',
                trailer: 'eCDeNtxSKvE/hq720.jpg',
                temporadas: 1
            },
            {
                id: 6,
                nombre: 'Amor 101',
                img: 'https://images.seriesturcas.gratis/2020/05/15053339/ask-101-1-277x156.jpg',
                trailer: '7e8esAsXuLk/hqdefault.jpg',
                temporadas: 2
            },
        ]
    },
    {
        titulo: 'Acción',
        data: [
            {
                id: 1,
                nombre: 'Supergirl',
                img: 'https://i.blogs.es/0ffe37/supergirl-cw/1366_2000.jpeg',
                trailer: 'VxfFBr-GoJI/hq720.jpg',
                temporadas: 6
            },
            {
                id: 2,
                nombre: 'Agentes de S.H.I.E.L.D.',
                img: 'https://es.web.img2.acsta.net/newsv7/19/07/31/10/17/0561433.jpg',
                trailer: 'T3T-evQZiQo/hq720.jpg',
                temporadas: 7
            },
            {
                id: 3,
                nombre: 'Titanes',
                img: 'https://i.blogs.es/18f5bd/titans_season_2_poster/840_560.jpeg',
                trailer: '6ttU1iKSpdA/hq720.jpg',
                temporadas: 1
            },
            {
                id: 4,
                nombre: 'CSI: Miami',
                img: 'https://vader.news/__export/1617774147700/sites/gadgets/img/2021/04/07/csi_miami_3.jpeg_1482777527.jpeg',
                trailer: 'S6P05pCVtuU/hqdefault.jpg',
                temporadas: 10
            },
            {
                id: 5,
                nombre: 'Star Wars: La guerra de los clones',
                img: 'https://www.gamerfocus.co/wp-content/uploads/2020/11/clone-wars.jpg',
                trailer: '3CJUjxfQagA/hq720.jpg',
                temporadas: 7
            },
            {
                id: 6,
                nombre: 'Invincible',
                img: 'https://plataformas.news/online/nota_invincible-se-estrenara-el-26-de-marzo-en-amazon-prime-video.jpg',
                trailer: '-bfAVpuko5o/hq720.jpg',
                temporadas: 1
            },
        ]
    }
]

const Series = () => {

    const [ previewSerie, setPreviewSerie ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);

    return(
        <>
            <Preview previewVideo = { previewSerie } setModalVisible = { setModalVisible } />
            <SafeAreaView style = {{ height: '65%' }}>
                <SectionList 
                    sections = { dataSeries }
                    keyExtractor = { (item, index) => item + index }
                    renderItem = { ({ item }) => (
                        <TouchableHighlight
                            onPress = { () => setPreviewSerie(item.trailer) }
                            underlayColor="white"
                        >
                            <List serie = { item } />
                        </TouchableHighlight>
                    ) }
                    renderSectionHeader = { ({ section: { titulo } }) => (
                        <Text style = { styles.titulo }>{ titulo }</Text>
                    )}
                />
            </SafeAreaView>

            { previewSerie === '' ? (
                null
            ):(
                <ModalView modalVisible = { modalVisible } setModalVisible = { setModalVisible } preview = { previewSerie } />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        color: '#000',
        marginVertical: 5,
    },
})

export default Series;
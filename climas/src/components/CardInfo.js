import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const CardInfo = ({ dataWeather }) => {
    //Destructuring
    const  { weather, main, wind, name }   = dataWeather;

    //Direccion del icono del clima
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return(
        <View style = { styles.containerInfo }>
            <Text style = { styles.city }>{ name }</Text>
            <Image source = {{ uri: icon }} style = {{ width: 120, height: 120 }} />
            <View style = { styles.infoTemp}>
                <Icon name="thermometer-outline" size = {50} color='#FFF' />
                <Text style = { styles.temp }>{ main.temp }°</Text>
                <Text style = { [styles.temp, { fontSize: 18 }] }>{ weather[0].description }</Text>
            </View>
            <View style = { styles.minMax }>
                <Text style = { styles.textInfo }>Minima: { main.temp_min }°</Text>
                <Text style = { styles.textInfo }>Maxima: { main.temp_max }°</Text>
            </View>
            <Text style = { styles.textInfo } >Humedad: { main.humidity }%</Text>
            <Text style = { styles.textInfo } >Viento: { (wind.speed * 3.6).toFixed(2) } km/h</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInfo: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    city: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#FFF',
        fontWeight: '500'
    },
    infoTemp: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    temp: {
        fontSize: 26,
        marginRight: 10,
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'center',
    },
    minMax: {
        flexDirection: 'row'
    },
    textInfo: {
        fontSize: 18,
        margin: 5,
        color: '#FFF',
        fontWeight: '900'
    }
})


export default CardInfo;
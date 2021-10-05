import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './src/components/Formulario';
import CardInfo from './src/components/CardInfo';

export default function App() {

    const [ city, setCity ] = useState('');
    const [ dataWeather, setDataWeather ] = useState(null)
    const APIkey = 'a5f7c01020d596bc09838e38450e89ac';

    useEffect( () => {
        //FUNCION PARA HACER LA PETICION A LA API
        const getWheather = async () => {
            try
            {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&lang=es&units=metric`;
                const res = await fetch(url);
                const data = await res.json();
                setDataWeather(data);
            }
            catch(error)
            {
                console.log(error);
            }
        }

        if(city !== '')
        {
            getWheather();
        }
    }, [city])

    return (
        <View style={styles.container}>
            <Formulario city = { city } setCity = { setCity } />
            { city.trim() !== '' && dataWeather !== null ? (
                <CardInfo dataWeather = { dataWeather } />
            ): (
                null
            ) }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22a7f0',
        alignItems: 'center',
    },
});

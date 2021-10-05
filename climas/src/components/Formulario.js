import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

//Array con las cuidades de San Salvador
const cities = ['Aguilares', 'Apopa', 'Ayutuxtepeque', 'Ciudad Delgado', 'Cuscatancingo', 'El Paisnal', 'Guazapa', 'Ilopango', 'Mejicanos', 'Nejapa', 'Panchimalco', 'Rosario de Mora', 'San Marcos', 'San Martín', 'San Salvador', 'Santiago Texacuangos', 'Santo Tomás', 'Soyapango', 'Tonacatepeque']

const Formulario = ({ city, setCity }) => {
    return(
        <View style = { styles.containerForm }>
            <Text style = { styles.titulo }>Climas de San Salvador</Text>
            <Picker 
                style = { styles.PKcity }
                selectedValue = { city }
                onValueChange = { ciudad => setCity(ciudad) }
            >
                <Picker.Item style = { styles.itemcity } label="Seleccione una ciudad" value="" />
                { cities.map( (city, index) => (
                    <Picker.Item key={ index } style= { styles.itemcity }  label={ city } value={ city } />
                )) }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center'
    },
    titulo: {
        width: '100%',
        fontSize: 26,
        marginVertical: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
    },
    PKcity: {
        width: '90%',
        height: 60,
        backgroundColor: '#FFF',
        borderBottomWidth: 5,
    },
    itemcity: {
        fontSize: 18
    }
})

export default Formulario;
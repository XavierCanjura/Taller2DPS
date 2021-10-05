import React from 'react';
import { Modal, StyleSheet, View, Pressable, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const ModalView = ({ modalVisible, setModalVisible, preview }) => {

    return(
        <Modal
            animationType="slide"
            visible={modalVisible}
            presentationStyle='fullScreen'
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style = { styles.video }>
                <WebView
                    source={{
                        uri: `https://www.youtube.com/embed/${preview}`
                    }} 
                />
            </View>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={ { color: '#FFF', fontSize: 20, textAlign: 'center' } }>Cerrar Video</Text>
            </Pressable>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    video: {
        display: 'flex',
        width: '100%',
        height: '95%',
        position: 'absolute',
    },
    button: {
        elevation: 5,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: '5%',
        margin: 'auto',
        backgroundColor: '#2196F3',
        justifyContent: 'center'
    }
})

export default ModalView;
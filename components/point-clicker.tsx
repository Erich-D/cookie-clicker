import {View, Text, StyleSheet, Button, TouchableHighlight, 
    TouchableOpacity, TouchableWithoutFeedback, Vibration, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

type pointClickerProps = {
    handler:any
}

export default function PointClicker(props:pointClickerProps){



    function onPressHandler () {
        console.log("Button pressed")
        // vibrate can take in a number which is how long in miliseconds to vibrate the device:
        Vibration.vibrate(1000); // 1 seconds
        // vibrate can also take in an array of numbers indicating pause time, vibate time, pause time, vibrate time, etc.
        // ex: pause for 1 second, vibrate for 2, pause 1, vibrate 3
        Vibration.vibrate([1000, 2000, 1000, 3000])
        Vibration.vibrate(10000); // 10 seconds
    }

    function onLongPressHandler() {
        console.log("Button long pressed");
        Vibration.cancel();
    }

    return <View>
        <TouchableHighlight onPress = {props.handler} onLongPress = {onLongPressHandler}>
            <View style = {styles.touchableView}>
                <Image style={styles.touchableImage} source={{uri:'https://external-preview.redd.it/sVAhS9sl7nJp15mi-RSkNn1XHLNJxT37fEFyIi0WqZY.jpg?auto=webp&s=095c07c6e4d611cbbf94e91648b7880cee353f93'}}/>
            </View>
        </TouchableHighlight>
    </View>
}

const styles = StyleSheet.create({
    touchableView : {
        //backgroundColor: '#b8f5c8',
        marginBottom: 10,
    },
    touchableText : {
        fontSize: 20,
    },
    touchableImage:{
        height:300,
        width:300,
        borderRadius:150
    }

})
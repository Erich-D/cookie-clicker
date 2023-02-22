import {View, Text, StyleSheet, Button, TouchableHighlight, 
    TouchableOpacity, TouchableWithoutFeedback, Vibration} from 'react-native';

type touchButtonProps = {
    title: string
    handler:any
}

export default function TouchButton(props:touchButtonProps){


    return <View>
        <TouchableOpacity onPress = {props.handler} style={styles.button}>
            <Text style = {styles.touchableText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    touchableText : {
        fontSize: 8,
        alignSelf: "center",
        color:"white"
    },
    button:{
        width:"100%",
        borderRadius:5,
        borderWidth: 1,
        fontSize: 4,
        backgroundColor:"red",
        padding:2
    },

})

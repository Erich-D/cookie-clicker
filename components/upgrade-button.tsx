import {View, Text, StyleSheet, Button, TouchableHighlight, 
    TouchableOpacity, TouchableWithoutFeedback, Vibration} from 'react-native';

type upgradeButtonProps = {
    title: string
    handler:any
    disable:boolean
    cost:number
    available:number
}

export default function UpgradeButton(props:upgradeButtonProps){


    return <View>
        <TouchableWithoutFeedback onPress = {props.handler} disabled={props.disable}>
            <View style = {styles.touchableView}>
                <Text style = {styles.touchableText}>{props.title}</Text>
                <Text style = {styles.detailsText}>Power cost {props.cost}</Text>
                <Text style = {styles.detailsText}>Available {props.available}</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
}

const styles = StyleSheet.create({
    touchableView : {
        backgroundColor: '#b8f5c8',
        marginBottom: 10,
    },
    touchableText : {
        fontSize: 20,
        alignSelf: "center",
    },
    button:{
        width:"20%",
        borderRadius:5,
        borderWidth: 1,
        fontSize: 4,
        backgroundColor:"red"
    },
    detailsText : {
        fontSize: 8,
        alignSelf: "center",
    },
})
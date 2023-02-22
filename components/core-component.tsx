import {View, ScrollView, Image, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, Vibration, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import PointClicker from './point-clicker';
import TouchButton from './touch-button';
import UpgradeButton from './upgrade-button';
import Heading from './Heading';

export default function CoreComponent(){
    const [score,setScore] = useState<number>(0)
    const [boost,setBoost] = useState<number>(0)
    const [multiplier,setMultiplier] = useState<number>(0)
    const [boostDisabled,setBoostDisabled] = useState<boolean>(true)
    const [multiplierDisabled,setMultiplierDisabled] = useState<boolean>(true)
    const [boostActive,setBoostActive] = useState<boolean>(false)
    const [multiplierActive,setMultiplierActive] = useState<boolean>(false)


    async function saveScore(){
        await AsyncStorage.setItem('score', String(score));
    }

    async function clearScore(){
        await AsyncStorage.removeItem('score');
        setScore(0);
        setBoost(0)
        setMultiplier(0)
        setBoostDisabled(true)
        setMultiplierDisabled(true)
    }

    useEffect(()=>{
        const fetchData = async () => {
            const storedScore = await AsyncStorage.getItem('score');
            setScore(Number(storedScore))
        }
        fetchData();
    },[])

    useEffect(()=>{
        const saveData = async () => {
            await AsyncStorage.setItem('score',String(score));
        }
        saveData();
        setBoost(Math.floor(score/25));
        setMultiplier(Math.floor(score/125))
        score%25 === 0 && powerPlayAlert()
        boost > 0 && setBoostDisabled(false)
        multiplier > 0 && setMultiplierDisabled(false)
        //const boostOn = setInterval(increaseScoreByTwo,2000)
    },[score])

    function powerPlayAlert(){
        Vibration.vibrate(1000);
        console.log("Vibration on")
    }

    function powerBoostHandler(){
        console.log("Alert activated")
        Alert.alert("You Have Selected A Power Boost", "Are You Sure?", [
            {
                text: "Yes",
                onPress: () => {console.log("Excellent")}
            },{
                text: "No",
                onPress: () => {console.log("Too Bad")}
            }
        
        ]);
        const newScore = score - 25
        setScore(newScore)
        setBoostActive(true)
        console.log("Boost activated")
        const boostOn = setInterval(increaseScoreByTwo,1000)
        const timeOut = setTimeout(()=>{clearInterval(boostOn);console.log("boost ended");setBoostActive(false)},10000)
        //const boostTimeout = setTimeout(()=>{setBoostActive(false);console.log("boost ended")},10000)
    }

    function powerMultiplyerHandler(){
        console.log("Alert activated")
        Alert.alert("You Have Selected A Multiplyer Boost", "Are You Sure?", [
            {
                text: "Yes",
                onPress: () => {console.log("Excellent")}
            },{
                text: "No",
                onPress: () => {console.log("Too Bad")}
            }
        
        ]);
        Vibration.vibrate(5000);
        const newScore = score - 125
        setScore(newScore)
        setMultiplierActive(true)
        console.log("Multiplyer activated")
        const boostTimeout = setTimeout(()=>{setMultiplierActive(false);console.log("Multiplyer ended")},5000)
    }

    function increaseScoreByTwo(){
        let boostScore = score + 2 
        setScore(c=>c+2)
    }

    function pointHandler(){
        const newScore = boostActive ? score+2:score+1
        const powerScore = multiplierActive ? Math.floor(newScore*1.05):newScore
        setScore(powerScore)
    }

    return <>
        <Heading size={32} txt={"Super Power"}/>
        <Heading size={18} txt={String(score)}/>
        {score > 0 && <TouchButton title = "Clear Score" handler={clearScore}/>}
        <PointClicker handler={pointHandler}/>
        <UpgradeButton title = "Power Boost" handler={powerBoostHandler} disable={boostDisabled} cost={25} available={boost}/>
        <UpgradeButton title = "Power Multiplier" handler={powerMultiplyerHandler} disable={multiplierDisabled} cost={125} available={multiplier}/>
    </>
}

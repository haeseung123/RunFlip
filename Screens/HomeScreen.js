import React from "react";
import { View, Text } from "react-native";

import HomeMain from "../Components/home/HomeMain";
import Menubar from "../Components/Menubar";


export default function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
            <HomeMain></HomeMain>
            <Text>호오오오오오몸</Text>
            <Menubar></Menubar>
            </View>
        </View>
        
    )
}
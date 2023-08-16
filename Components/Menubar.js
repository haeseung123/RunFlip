import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { normalizeSize } from "../Funclibrary/GlobalFunc";
import menubarStyles from "../Styles/menubarStyles";


export default function Menubar() {
    const navigation = useNavigation()
    return(
        <View style={menubarStyles.container}>
            <TouchableOpacity onPress={_=> navigation.navigate('home')}>
                <Entypo name="home" size={normalizeSize(24)} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={_=> navigation.navigate('전체 기록')}>
                <FontAwesome name="bookmark" size={normalizeSize(24)} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={_=> navigation.navigate('start')}>
                <FontAwesome name="plus-square" size={normalizeSize(24)} color="#274490" />
            </TouchableOpacity>
            <TouchableOpacity onPress={_=> navigation.navigate('challenge')}>
                <FontAwesome name="trophy" size={normalizeSize(24)} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={_=> navigation.navigate('마이페이지')}>
                <FontAwesome name="user" size={normalizeSize(24)} color="black" />
            </TouchableOpacity>
        </View>
    )
}
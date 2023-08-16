import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { normalizeSize } from "../../../Funclibrary/GlobalFunc";

export default function Logo() {
    return (
        <View style={logoStyles.container}>
            <Image 
                style={logoStyles.logoStyle}
                source={require('../../../assets/logo.png')}
            />
        </View>
    )
}

const logoStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: normalizeSize(220)
    },
    logoStyle: {
        width: normalizeSize(110),
        height: normalizeSize(110)
    }
})


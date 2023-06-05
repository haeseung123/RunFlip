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
        justifyContent: 'center'
    },
    logoStyle: {
        width: normalizeSize(100),
        height: normalizeSize(100),
        borderWidth: normalizeSize(5),
        borderRadius: normalizeSize(40)
    }
})


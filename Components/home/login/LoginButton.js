import React from "react";
import { View } from "react-native";

import { normalizeSize } from "../../../Funclibrary/GlobalFunc";

import MenualButton from "../../MenualButton";

export default function LoginButton({pressEvent}) {
    return (
        <View style={{flex:0.75}}>
            <MenualButton
            innerText='로그인'
            customStyle={customButtonStyle}
            onPressEvent={pressEvent ? pressEvent : null}
            />

        </View>
    )
}

const customButtonStyle = {
    container: {
        flex: 1,
    },
    buttonStyle: {
        width: normalizeSize(300),
        height: normalizeSize(50),
        backgroundColor: '#7687AD',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        // fontFamily: 'bold',
        fontSize: normalizeSize(16),
    },
    activeOpacity: .3,
}
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default function UpdateImg() {
    const onPressImg = _=> {
        alert('test')
    }

    return (
        <View style={updateImgStyle.container}>
            <TouchableOpacity onPress={onPressImg}>
                <AntDesign name="camera" size={normalizeSize(20)} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const updateImgStyle = {
    container: {
        flex: 1
    }
}

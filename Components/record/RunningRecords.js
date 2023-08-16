import React from "react";
import { View, Text } from "react-native";

import { getJsonData } from "../../Funclibrary/Storage";

export default function RunningRecords() {
    const getAllData = async () => {
        const recordData = await getJsonData('record')
        
        console.log(recordData)

    }

    getAllData()

    return (
        <View style={{flex:1}}>
            <Text>기록화면 테스트</Text>
        </View>
    )
}
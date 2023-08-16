import React from "react";
import { View, Text } from "react-native";

import homeRecordStyles from "../../Styles/home/homeRecordStyles";

/**
 * 
 * 거리, 시간, 페이스, 칼로리 기록을 합산해서 받아올 것임!
 * 지금 짜는 것은 와꾸입니다.
 * 
 */

export default function HomeRecord() {
    return (
        <View style={homeRecordStyles.container}>
            <Text style={homeRecordStyles.title}>전체기록</Text>
            <View style={homeRecordStyles.recordWrap}>
                <View>
                    <Text>157.75</Text>
                    <Text>거리(km)</Text>
                </View>
                <View>
                    <View>
                        <Text>00:00:00</Text>
                        <Text>시간</Text>
                    </View>
                    <View>
                        <Text>00'00''</Text>
                        <Text>페이스</Text>
                    </View>
                    <View>
                        <Text>6,123</Text>
                        <Text>칼로리</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}
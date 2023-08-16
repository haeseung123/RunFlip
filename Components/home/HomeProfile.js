import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import homeProfileStyles from "../../Styles/home/homeProfileStyles";

/**
 * 닉네임, 상태메세지, 프로필 사진 서버에서 받아올 예정
 * 틀 먼저 잡고 서버 개발 후 로직 수정 예정
 */

export default function HomeProfile() {
    return (
        <View style={homeProfileStyles.container}>
            <View style={homeProfileStyles.profileWrap}>
                <Text style={homeProfileStyles.userName}>이해승빵꾸똥꾸</Text>
                <Text style={homeProfileStyles.stateMessege}>일주일에 세번이상 뛰기!</Text>
            </View>
            <Image style={homeProfileStyles.imageStyle}
            source={require('../../User/UserImg.jpeg')}
            >
            </Image>
            
        </View>
    )
}
import React from "react";
import { View, Text } from "react-native";

import profileSettingStyles from "../../Styles/mypage/profileSettingStyles";

export default function Orders() {
    return (
        <View style={profileSettingStyles.infoOrderWrap}>
            <Text style={{color: '#696969'}}>아이디</Text>
            <Text style={{color: '#696969'}}>닉네임</Text>
            <Text style={{color: '#696969'}}>이메일</Text>
            <View></View>
            <Text>상태메시지</Text>
        </View>
    )
}
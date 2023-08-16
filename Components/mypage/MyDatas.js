import React from "react";
import { View, Text } from "react-native";

import profileSettingStyles from "../../Styles/mypage/profileSettingStyles";

export default function MyDatas({userDatas}) {
    //배열 형태로 받아올건데 안받아와져서 일단 임시로 객체형태로 받아옴
    // const [id, email, nickName, message] = userDatas
    const {userId, nickname, email, message} = userDatas
    return (
        <View style={{flex: 2}}>
            <View style={profileSettingStyles.userInfoWrapper}>
                <Text>{userId===undefined ? 'empty' : userId}</Text>
                <Text>{nickname===undefined ? 'empty' : nickname}</Text>
                <Text>{email===undefined ? 'empty' : email}</Text>
                
                <View></View>
                <Text style={profileSettingStyles.statusMessage}>{message===undefined ? '' : message}</Text>
            </View>
            
        </View>
    )
}
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { getJsonData } from "../../Funclibrary/Storage";

import homeProfileStyles from "../../Styles/home/homeProfileStyles";

/**
 * 닉네임, 상태메세지, 프로필 사진 서버에서 받아올 예정
 * 틀 먼저 잡고 서버 개발 후 로직 수정 예정
 */

export default function HomeProfile() {
    const isFocused = useIsFocused()
    const [data, setData] = useState({})

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getJsonData('profile')
            setData(userData.value)
        };

        getUserData()
    }, [isFocused])

    return (
        <View style={homeProfileStyles.container}>
            <View style={homeProfileStyles.userDataWrap}>
                <View style={homeProfileStyles.profileWrap}>
                    <Text style={homeProfileStyles.userName}>{data.nickname}</Text>
                    <Text style={homeProfileStyles.stateMessage}>{data.message}</Text>
                </View>
                <Image style={homeProfileStyles.imageStyle}
                source={require('../../User/UserImg.jpeg')}
                >
                </Image>
            </View>
            <View style={homeProfileStyles.runningDataWrap}>
                <Text style={homeProfileStyles.recordTitle}>전체 기록</Text>
                <View style={homeProfileStyles.recordWrap}>
                    <View style={homeProfileStyles.distanceWrap}>
                        <Text style={homeProfileStyles.distanceData}>{data.sumDistance}</Text>
                        <Text style={homeProfileStyles.dataText}>  거리(km)</Text>
                    </View>
                    <View style={homeProfileStyles.twoRecordWrap}>
                        <View style={homeProfileStyles.dataWrap}>
                            <Text style={homeProfileStyles.recordsData}>{data.sumElapsedTime}</Text>
                            <Text style={homeProfileStyles.dataText}>  시간</Text>
                        </View>
                        <View style={homeProfileStyles.dataWrap}>
                            <Text style={homeProfileStyles.recordsData}>{data.sumCalories}</Text>
                            <Text style={homeProfileStyles.dataText}>  칼로리</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            
            
        </View>
    )
}
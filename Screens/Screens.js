import React, { useState } from "react";
import { Button, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen'
import RecordsScreen from './record/RecordsScreen'
import DetailScreen from "./record/DetailScreen";
import StartScreen from './start/StartScreen'
import EndScreen from "./start/EndScreen";
import ChallengeScreen from './challenge/ChallengeScreen'
import MypageScreen from './mypage/MypageScreen'

import ConfirmButton from "../Components/start/ConfirmButton";

const Stack = createNativeStackNavigator()

export default function Screens() {
    const [data, setData] = useState(null)
    const confirmData = (confirmData) => {
        setData(confirmData)
    }


    return (
        <Stack.Navigator>
            {/** Home Screen **/}
            <Stack.Screen 
                name="home"
                component={HomeScreen}
                options={{
                    headerShown : false
                }}
            />
            {/** Record Screen **/}
            <Stack.Screen 
                name="전체 기록"
                component={RecordsScreen}
                options={{
                    headerLeft: _=> (<View></View>), //뒤로가기 버튼 가리는 꼼수
                }}
            />
            {/** detail Screen **/}
            <Stack.Screen 
                name="상세 기록"
                component={DetailScreen}
                options={{
                    headerLeft: _=> (<View></View>)
                }}
            />
            {/** Start Screen **/}
            <Stack.Screen 
                name="start"
                component={StartScreen}
                options={{
                    headerLeft: _=> (<View></View>),
                    headerShown: false //헤더 없애는 옵션
                }}
            />
            {/** end Screen **/}
            <Stack.Screen
                name="운동 결과"
                // component={EndScreen}
                options={{
                    headerLeft: _=> (<View></View>),
                    gestureEnabled: false, //뒤로가기 제한
                    headerRight: _=> (<ConfirmButton data={data}></ConfirmButton>)
                }}
                
            >
                {props => <EndScreen {...props} onDataProcessed={confirmData} />}
            </Stack.Screen>
            {/** Challenge Screen **/}
            <Stack.Screen 
                name="challenge"
                component={ChallengeScreen}
                options={{
                    headerLeft: _=> (<View></View>),
                }}
            />
            {/** Mypage Screen **/}
            <Stack.Screen 
                name="마이페이지"
                component={MypageScreen}
                options={{
                    headerLeft: _=> (<View></View>),
                }}
            />
        </Stack.Navigator>
    )
}


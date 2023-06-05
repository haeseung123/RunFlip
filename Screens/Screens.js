import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

import HomeScreen from './HomeScreen'
import RecordScreen from './record/RecordScreen'
import StartScreen from './start/StartScreen'
import ChallengeScreen from './challenge/ChallengeScreen'
import MypageScreen from './mypage/MypageScreen'

const Stack = createNativeStackNavigator()

export default function Screens() {
    const navigation = useNavigation()
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
                name="record"
                component={RecordScreen}
                options={{
                    headerLeft: _=> (<View></View>), //뒤로가기 버튼 가리는 꼼수
                }}
            />
            {/** Start Screen **/}
            <Stack.Screen 
                name="start"
                component={StartScreen}
                options={{
                    headerLeft: _=> (<View></View>),
                }}
            />
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
                name="mypage"
                component={MypageScreen}
                options={{
                    headerLeft: _=> (<View></View>),
                }}
            />
        </Stack.Navigator>
    )
}


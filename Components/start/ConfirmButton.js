import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { getJsonData, saveRecordData, saveJsonData } from "../../Funclibrary/Storage";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default function ConfirmButton({ data }) {
    const navigation = useNavigation()

    const sumRecord = async () => {
        const {elapsedTime, totalDistance, calories} = data

        const userData = await getJsonData('profile')
        let {sumElapsedTime, sumDistance, sumCalories} = userData.value
        // console.log(sumElapsedTime, sumDistance, sumCalories)

        sumElapsedTime = moment(sumElapsedTime, 'HH:mm:ss')
                        .add(moment.duration(elapsedTime))
                        .format('HH:mm:ss')

        const sumData = {
            ... userData.value,
            sumElapsedTime : sumElapsedTime,
            sumDistance : sumDistance + totalDistance,
            sumCalories : sumCalories + calories
        }

        const controller = new AbortController()
        const { signal } = controller

        try {
            const response = await fetch('http://15.165.17.219:3000/user/update', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify(sumData),
                signal
            })
            const json = await response.json()
            if(json.code===200) {
                console.log('파이어베이스 업데이트 완료')
                await saveJsonData('profile', sumData)
            }
        }catch(e) {
            console.log(e)
        }

        
    }

    const savaRecord = async () => {
        const date = new Date()
        const currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        // const currentDate = '2023-8-22'

        const userData = await getJsonData('profile')
        const userId = userData.value.userId

        const controller = new AbortController()
        const { signal } = controller

        try {
            const response = await fetch('http://15.165.17.219:3000/record/save', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify({userId, data}),
                signal
            })
            const json = await response.json()
            if(json.code===200) {
                console.log('파이어베이스 저장 완료')
                // console.log(JSON.stringify({currentDate, data}))
                await saveRecordData('record', {currentDate, data})
            }

            // 모든 저장이 완료되면 홈으로 가기
            navigation.navigate('home')

        }
        catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        sumRecord()
    }, [])

    const CustomHeaderIcon = (props) => {
        return (
            <TouchableOpacity onPress={savaRecord} activeOpacity={1}>
                <Feather name="check" size={24} color="black" {...props}/>
            </TouchableOpacity>
        )
    }

    return(
        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon} >
            <Item
            title="Move"
            onPress={savaRecord}
            />
        </HeaderButtons>
    )
}
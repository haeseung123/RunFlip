import React, { useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import { getJsonData, saveJsonData } from "../../Funclibrary/Storage";
import { deleteRecordData } from "../../Funclibrary/Storage";

export default function DeleteButton({ data }) {
    const navigation = useNavigation()

    const onDeleteData = async () => {
        const {elapsedTime, totalDistance, calories} = data

        const userData = await getJsonData('profile')
        const userId = userData.value.userId

        let {sumElapsedTime, sumDistance, sumCalories} = userData.value
        sumElapsedTime = moment(sumElapsedTime, 'HH:mm:ss')
                        .subtract(moment.duration(elapsedTime))
                        .format('HH:mm:ss')
        
        const subtractData = {
            ... userData.value,
            sumElapsedTime : sumElapsedTime,
            sumDistance : (parseFloat(sumDistance) - parseFloat(totalDistance)).toFixed(2),
            sumCalories : (parseFloat(sumCalories) - parseFloat(calories)).toFixed(2)
        }
        
        const controller = new AbortController()
        const { signal } = controller

        try { 
            const updateResponse = await fetch('http://15.165.17.219:3000/user/update', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify(subtractData),
                signal
            })
            const json = await updateResponse.json()
            if(json.code===200) {
                console.log('파이어베이스 업데이트 완료')
                await saveJsonData('profile', subtractData)
            }
        }
        catch(e) {
            console.log(e)
        }

        const deleteResponse = await fetch('http://15.165.17.219:3000/record/delete', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {'Content-type': 'application/json', 'authorization': null},
            body: JSON.stringify({userId, data}),
            signal
        })

        const json = await deleteResponse.json()
        if(json.code===200) {
            console.log('파이어베이스 삭제 완료')
            await deleteRecordData('record', data)
        }

        navigation.navigate('전체 기록')

        
    }
    
    const CustomHeaderIcon = () => {
        return (
            <TouchableOpacity onPress={onDeleteData}>
                <FontAwesome name="trash-o" size={20} color="black" />
            </TouchableOpacity>
        )
    }

    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item 
            
            />
        </HeaderButtons>
    )
}
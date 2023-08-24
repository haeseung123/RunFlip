import React, { useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { getJsonData } from "../../Funclibrary/Storage";
import { deleteRecordData } from "../../Funclibrary/Storage";

export default function DeleteButton({ data }) {
    const navigation = useNavigation()

    const onDeleteData = async () => {
        const userData = await getJsonData('profile')
        const userId = userData.value.userId

        const controller = new AbortController()
        const { signal } = controller

        try {
            const response = await fetch('http://15.165.17.219:3000/record/delete', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify({userId, data}),
                signal
            })
            const json = await response.json()
            if(json.code===200) {
                console.log('파이어베이스 삭제 완료')
                await deleteRecordData('record', data)
            }

            navigation.navigate('전체 기록')

        }
        catch (e) {
            console.log(e)
        }

        
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
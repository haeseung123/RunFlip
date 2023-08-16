import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Dialog from 'react-native-dialog'
import { Entypo } from '@expo/vector-icons';
import { getJsonData, saveJsonData } from "../../Funclibrary/Storage";

import MyDatas from "./MyDatas";
import Orders from "./Orders";

import profileSettingStyles from "../../Styles/mypage/profileSettingStyles";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default function ProfileSetting({profileData}) {
    const {userId, nickname, email, message} = profileData

    const [visible, setVisible] = useState(false)
    const [target, onChangeTarget] = useState(null)
    const [input, onChangeInput] = useState(null)
    const [data, setData] = useState({userId, nickname, email, message})

    const onTargetNick = _=> {
        onChangeTarget('nickname')
        setVisible(true)
    }
    const onTargetEmail = _=> {
        onChangeTarget('email')
        setVisible(true)
    }
    const onTargetMessage = _=> {
        onChangeTarget('message')
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const handleEdit = async () => {
        const getProfile = await (await getJsonData('profile')).value
        
        if(target==='nickname') {
            getProfile.nickname = input
        }
        else if(target==='email') {
            getProfile.email = input
        }
        else if(target==='message') {
            getProfile.message = input
        }

        const controller = new AbortController()
        const { signal } = controller
        let timeOver = true

        setTimeout(_=> {
            if(timeOver) {
                controller.abort()
            }
        },5000)

        try {
            const response = await fetch('http://15.165.17.219:3000/user/update', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {'Content-type': 'application/json', 'authorization': null},
            body: JSON.stringify(getProfile),
            signal
            })
            //리스폰받은거 처리하기
            const json = await response.json()
            if(json.code===200) {
                console.log('파이어베이스 업데이트 완료')
                await saveJsonData('profile', getProfile)
                setData({...getProfile})
            }
            
        }
        catch(e) {
            console.log(e)
        }
        finally {
            handleCancel()
        }
    }

    return(
        <View style={profileSettingStyles.container}>
            <View style={profileSettingStyles.userInfoContainer}>
                <Orders></Orders>
                <MyDatas userDatas={data}></MyDatas>
                <View style={profileSettingStyles.repairBtnWrapper}>
                    <Dialog.Container
                    visible={visible}
                    >
                        <Dialog.Title>정보수정</Dialog.Title>
                        <Dialog.Input 
                        placeholder="수정할 내용을 입력하세요"
                        onChangeText={onChangeInput}
                        value={input}
                        />
                        <Dialog.Button onPress={handleEdit} label="확인" />
                        <Dialog.Button onPress={handleCancel} label="취소" />
                    </Dialog.Container>
                    <Text></Text>
                    <Text></Text>
                    <TouchableOpacity
                    activeOpacity={.6}
                    onPress={onTargetNick}
                    >
                        <Entypo name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={.6}
                    onPress={onTargetEmail}
                    style={{marginTop: normalizeSize(5)}}
                    >
                        <Entypo name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
                    <TouchableOpacity
                    activeOpacity={.6}
                    onPress={onTargetMessage}
                    >
                        <Entypo name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            </View>
            
        </View>
    )
}
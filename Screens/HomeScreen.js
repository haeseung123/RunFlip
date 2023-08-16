import React, { useState } from "react";
import { View, Text } from "react-native";

import { saveJsonData } from "../Funclibrary/Storage";

import HomeMain from "../Components/home/HomeMain";
import Menubar from "../Components/Menubar";
import LoginMain from "../Components/home/login/LoginMain";


export default function HomeScreen() {
    const [logined, setLogined] = useState(null)
    const [showLoading, setShowLoading] = useState(false)


    /**
     * 사용자 정보 초기화
     * @param {*} profile 
     */
    const initialize = async profile => {
        const parsingProfile = JSON.parse(profile.replace(/\\/g, ''))
        const saveResult = await saveJsonData('profile', parsingProfile)
        const { result } = saveResult

        if(result === 'done') {
            setLogined('성공')
            navigation.setOptions(globalHeader)
        } else if(result === 'failed') {
            const { message } = saveResult
            alertMessage('안내', message)
        } else if(result === 'unexpected error') {
            const { message } = saveResult
            alertMessage('안내', message)
        }
        setShowLoading(false)
    }


    /**
     * @param {*} user 
     */
    const login = async user => {
        const controller = new AbortController()
        const { signal } = controller
        let timeOver = true

        setTimeout(_=> {
            if(timeOver) {
                controller.abort()
            }
        }, 5000)

        try {
            
            const request = await fetch('http://15.165.17.219:3000/user/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify(user),
                signal
            })

            //나중에 지워야지
            console.log(user)
            
            const json = await request.json()
            timeOver = false

            const {code, message, userData} = json
            if(code === 404) {
                console.log(message)
            } else if(code === 200) {
                const { profile } = userData
                initialize(profile)
            }

        } catch (e) {
            console.log(e)
            // setShowLoading(false)
        }

    }

    return (
        <View style={{flex: 1}}>
            {
                logined === '성공'
                ?
                <View style={{flex: 1}}>
                <HomeMain></HomeMain>
                <Text>호오오오오오몸</Text>
                <Menubar></Menubar>
                </View>
                :
                <View style={{flex: 1}}>
                    <LoginMain 
                    loginHandler={login}
                    
                    />
                </View>
            }
            
        </View>
        
    )
}
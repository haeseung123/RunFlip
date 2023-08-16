import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Logo from "./Logo";
import LoginButton from "./LoginButton";
import loginMainStyles from "../../../Styles/home/login/loginMainStyles";

export default function LoginMain({loginHandler}) {
    const [inputId, setInputId] = useState(null)
    const [inputPass, setInputPass] = useState(null)

    const onChangeId = id => setInputId(id)
    const onChangePass = pass => setInputPass(pass)

    const onPressLogin = _=> {
        if(inputId && inputPass) {
            
            loginHandler({inputId, inputPass})
            setInputPass(null)
        }
        else console.log('아이디패스워드 입력안함 테스트 알러트 함수필요')
        
    }


    return (
        <View style={loginMainStyles.container}>
            <Logo />
            <View style={loginMainStyles.inputStyle}>
                <Text style={loginMainStyles.textStyle}>아이디</Text>
                <TextInput 
                textAlign="left"
                style={loginMainStyles.input}
                onChangeText={onChangeId}
                />
                <Text style={loginMainStyles.textStyle}>패스워드</Text>
                <TextInput 
                textAlign="left"
                style={loginMainStyles.input}
                secureTextEntry={true}
                onChangeText={onChangePass}
                value={inputPass}
                />
            </View>
            <LoginButton
            pressEvent={onPressLogin}
            />
        </View>
    )
}
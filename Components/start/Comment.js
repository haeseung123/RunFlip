import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Dialog from 'react-native-dialog'

import commentStyles from "../../Styles/start/commentStyles";

export default function Comment({inputComment, setInputComment}) {
    const [comment, setComment] = useState(null)
    const [visible, setVisible] = useState(false)
    
    const onChangeText = _=> {
        setVisible(true)
    }
    const onChangeComment = (comment) => {
        setComment(comment)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const handleComfirm = () => {
        setInputComment(comment)
        setVisible(false)
    }
    
    return (
        <View style={commentStyles.commentContainer}>
            <Dialog.Container
            visible={visible}>
                <Dialog.Title>메모하기</Dialog.Title>
                <Dialog.Input
                onChangeText={onChangeComment}
                value={comment}
                />
                <Dialog.Button onPress={handleComfirm} label="확인"/>
                <Dialog.Button onPress={handleCancel} label="취소" />
            </Dialog.Container>
            <View style={commentStyles.commentWrapper}>
                <Text style={{fontWeight: 'bold'}}>메모하기</Text>
                <View style={commentStyles.inputText}>
                <Text style={commentStyles.text} onPress={onChangeText}>{comment}</Text>
                </View>
            </View>
            
        </View>
    )
}

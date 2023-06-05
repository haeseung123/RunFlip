import React from "react";
import { View, Text, ActivityIndicator, Modal } from "react-native";

export default function Loading() {
    return(
        <Modal>
            <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `rgba(0,0,0,.5)`
            }}>
                <ActivityIndicator animating={true} color='white' size='large' />
            <Text></Text>
            </View>
        </Modal>
    )
}
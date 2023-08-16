import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

import UpdateImg from "./UpdateImg";

import profileImgStyles from "../../Styles/mypage/profileImgStyles";

export default function ProfileImg({ProfileImage}) {
    // console.log(ProfileImage.image)
    const image = ProfileImage.image
    return (
        <View style={profileImgStyles.container}>
            <Image 
            style={profileImgStyles.imageSytle}
            source={{uri: image}}/>
            <UpdateImg></UpdateImg>
        </View>
    )
}

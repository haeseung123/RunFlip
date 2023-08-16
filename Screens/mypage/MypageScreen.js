import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getJsonData } from "../../Funclibrary/Storage";

import Loading from "../../Components/global/Loading"
import Menubar from "../../Components/Menubar";
import ProfileImg from "../../Components/mypage/ProfileImg";
import ProfileSetting from "../../Components/mypage/ProfileSetting";

export default function MypageScreen() {
    const [profileData, setProfileData] = useState(null)
    const [profileImg, setProfileImg] = useState(null)
    const [isLoadedData, setloadedData] = useState(null)
    const loadData = async _=> {
        const loadResult = await getJsonData('profile')
        const { value, result } = loadResult
        if(result === 'done') {
            const {image} = value
            setProfileImg({image: image})

            setProfileData(value)


        } else if(result === 'failed') {
            const { message } = loadResult
        }

        setloadedData('done')
    }
    useEffect(_=> {
        loadData()
    }, [])

    return (
        <View style={{flex: 1}}>
            {
                isLoadedData === 'done'
                ?
                <View style={{flex: 1}}>
                    <ProfileImg 
                    ProfileImage={profileImg}/>
                    <ProfileSetting 
                    profileData={profileData}/>
                </View>
                :
                <Loading />
            }
        </View>
    )
}
import React, { useState } from "react";
import { View, Text } from "react-native";

import ControlPanel from "../../Components/start/ControlPanel";
import Map from "../../Components/start/Map";

export default function StartScreen() {
    //컨트롤 판넬에 네비게이션 보내서 취소시 홈 스크린으로 돌아갈수있게,
    //완료시 완료판넬 및 홈 스크린으로 돌아갈수 있게 할것임.
    const [isRunning, setIsRunning] = useState(false) //스톱워치 시작, 일시정지
    const [coordinates, setCoordinates] = useState([])

    // console.log('거리',coordinates)
    return (
        <View style={{flex: 1}}>
            <Map 
            isRunning={isRunning} 
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            ></Map>
            <ControlPanel 
            setIsRunning={setIsRunning} 
            coordinates={coordinates}
            ></ControlPanel>

        </View>
    )
}
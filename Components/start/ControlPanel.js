import React, {useState, useEffect} from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";
import Dialog from 'react-native-dialog'
import { useNavigation } from "@react-navigation/native";
import haversine from "haversine";

import startScreenStyles from "../../Styles/start/startScreenStyles";

export default function ControlPanel({setIsRunning, coordinates}) {
    const navigation = useNavigation()
    // elapsedTime 경과시간, totalDistance.toFixed(2) 총 거리
    //버튼마다 스타일 다르게 적용하기
    //start 1번:시작, 2번:일시중지 ... 완전히 끝내는 기능인 state는 새로 만들어야 할듯
    const [isStopWatchStart, setIsStopwatchStart] = useState(false)
    const [resetStopwatch, setResetStopwatch] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [visible, setVisible] = useState(false) //Dialog

    //거리 계산 함수
    const calculateTotalDistance = (coordinates) => {
        let totalDistance = 0

        for(let i=1; i<coordinates.length; i++) {
            const startCoord = coordinates[i-1]
            const endCoord = coordinates[i]
            const distance = haversine(startCoord, endCoord, {unit:'km'})
            totalDistance += distance
        }

        return totalDistance
    }

    const totalDistance = calculateTotalDistance(coordinates).toFixed(2)

    const handleStart = () => {
        setIsStopwatchStart(prevState => !prevState)
        if(!isStopWatchStart) {
            setIsRunning(true)
        }
        else setIsRunning(false)
    }

    const handleStop = () => {
        setIsStopwatchStart(false) //스톱워치 일시정지
        // setResetStopwatch(true) //리셋
        // setEnded(true) //완전 종료 상태값 
        setIsRunning(false) //달리기 중지
        setVisible(true)
        
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleConfirm = () => {
        setVisible(false)
        navigation.navigate('운동 결과', {
            elapsedTime: elapsedTime,
            totalDistance: totalDistance,
            coordinates: coordinates,

        })
    }

    


    //경과시간 구하기 useEffect에 넣기...
    const handleTimeChange = (time) => {
        if(visible) { //종료 안내문구가 있을때만 측정하도록... 그래야 매번 카운팅을 안함
            setElapsedTime(time)
            console.log(elapsedTime)
        }
    }


    return(
        <View style={{flex:.25}}>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>종료하시겠습니까?</Dialog.Title>
                    <Dialog.Button onPress={handleConfirm} label="확인" />
                    <Dialog.Button onPress={handleCancel} label="취소" />
                </Dialog.Container>
            </View>
            <View style={startScreenStyles.controlPanelWarpper}>
                <View style={startScreenStyles.timerWrapper}>
                    <Stopwatch
                    labs
                    start={isStopWatchStart}
                    reset={resetStopwatch}
                    getTime={handleTimeChange}
                    options={timerStyle}
                    />
                </View>
                <View style={startScreenStyles.buttonWrapper}>
                    <TouchableOpacity
                    style={startScreenStyles.buttonStyle}
                    activeOpacity={.6}
                    onPress={handleStart}
                    >
                        <Text style={startScreenStyles.buttonTextStyle}>
                            {isStopWatchStart ? '일시\n정지' : '시작'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={startScreenStyles.buttonStyle2}
                    activeOpacity={.6}
                    onPress={handleStop}
                    >
                        <Text style={startScreenStyles.buttonTextStyle}>종료</Text>
                    </TouchableOpacity>
                </View>
                <View style={startScreenStyles.distanceWrapper}>
                    <Text style={startScreenStyles.distanceTextStyle}>이동 거리</Text>
                    <Text style={startScreenStyles.distanceStyle}>{totalDistance}km</Text>
                </View>
            </View>
        </View>
    )
}

const timerStyle={
    container: {
        marginTop: normalizeSize(20),
        alignItems: 'center',
    },
    text: {
        fontSize: normalizeSize(35),
        fontWeight: 'bold',
        color: '#000',
      },
}
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import Comment from "../../Components/start/Comment";
import endScreenStyles from "../../Styles/start/endScreenStyles";
import { LAT_LNG_DELTA, SEARCH_RANGE, LOCATION_UPDATE_INTERVAL} from "../../StaticData/MapParams";


export default function EndScreen({ route, onDataProcessed }) {
    //해야되는거: 뒤로가기 금지, 칼로리 페이스 계산, 데이터 스토리지 및 데이터베이스 저장
    const {elapsedTime, totalDistance, coordinates} = route.params
    const [comment, setComment] = useState(null)
    
    const date = new Date()
    const endTime = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

    //칼로리 계산 칼로리 소모 (kcal) ≈ (거리(km) x MET 값) × 3.5
    //3.5는 평균 대사율을 나타내는 상수
    const calculateCalories = (totalDistance) => {
        const distanceInMeters = totalDistance * 1000
        const calories = (distanceInMeters * 8.0 * 3.5) / 1000
        return calories
    }

    const calories = calculateCalories(totalDistance).toFixed(2)

    const calculatePace = (totalDistance, elapsedTime) => {
        const [hours, minutes, seconds] = elapsedTime.split(':');
        const elapsedTimeInMinutes = parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 60;

        if (elapsedTimeInMinutes <= 0 || totalDistance <= 0) return 'N/A'

        const pace = elapsedTimeInMinutes/totalDistance
        const minutesPerKm = Math.floor(pace)
        const secondsPerKm = Math.floor((pace-minutesPerKm)*60)

        return `${minutesPerKm}' ${secondsPerKm}''`
    }

    const pace = calculatePace(totalDistance, elapsedTime)

    const confirmData = {pace, calories, comment, totalDistance, coordinates, elapsedTime, endTime}

    useEffect(_=> {
        onDataProcessed(confirmData)
    }, [comment])

    return (
        <View style={endScreenStyles.container}>
            <View style={endScreenStyles.dataContainer}>
                <View style={endScreenStyles.mapWrapper}>
                    <View style={endScreenStyles.titleWrapper}>
                        <Text style={endScreenStyles.title}>우왕ㅋ굳 오늘도 해냈다!</Text>
                    </View>
                    <Text style={endScreenStyles.timeText}>{endTime}</Text>
                    <MapView
                    style={endScreenStyles.mapView}
                    initialRegion={{
                        latitude: coordinates[0].latitude,
                        longitude: coordinates[0].longitude,
                        latitudeDelta: coordinates[0].latitudeDelta ? coordinates[0].latitudeDelta : 0.01,
                        longitudeDelta: coordinates[0].longitudeDelta ? coordinates[0].longitudeDelta : 0.01,
                    }}
                    provider={PROVIDER_GOOGLE} 
                    >
                        <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="blue" />
                    </MapView>
                </View>
                <View style={endScreenStyles.dataWrapper}>
                    <View style={endScreenStyles.dataWrap}>
                        <Text style={endScreenStyles.data}>{elapsedTime}</Text>
                        <Text style={endScreenStyles.text}>시간</Text>
                        <Text style={endScreenStyles.data}>{pace}</Text>
                        <Text style={endScreenStyles.text}>페이스</Text>
                    </View>
                    <View style={endScreenStyles.dataWrap}>
                        <Text style={endScreenStyles.data}>{totalDistance}</Text>
                        <Text style={endScreenStyles.text}>거리(Km)</Text>
                        <Text style={endScreenStyles.data}>{calories}</Text>
                        <Text style={endScreenStyles.text}>칼로리</Text>
                    </View>
                </View>
            </View>
            <Comment 
            inputComment={comment}
            setInputComment={setComment}
            />
            
            
        </View>
    )
}


    

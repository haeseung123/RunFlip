import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

import commentStyles from "../../Styles/start/commentStyles";
import endScreenStyles from "../../Styles/start/endScreenStyles";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

import { deleteRecordData } from "../../Funclibrary/Storage";

export default function DetailScreen({ route, onDeleteData }) {
    //메모 수정 기능 추가하기?
    const { detailData } = route.params
    const { calories, comment, coordinates, elapsedTime, endTime, pace, totalDistance } = detailData

    useEffect(_=> {
        onDeleteData(detailData)
    }, [])

    return (
        <View style={endScreenStyles.container}>
            <View style={endScreenStyles.dataContainer}>
                <View style={endScreenStyles.mapWrapper}>
                    <Text style={{
                        marginTop: normalizeSize(20),
                        color: 'grey',
                    }}>{endTime}</Text>
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
                        <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="blue"/>
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
            <View style={commentStyles.commentContainer}>
                <View style={commentStyles.commentWrapper}>
                    <Text style={{fontWeight: 'bold'}}>메모</Text>
                    <View style={commentStyles.inputText}>
                        <Text style={commentStyles.text}>{comment}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
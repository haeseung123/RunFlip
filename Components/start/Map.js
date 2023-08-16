import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import * as Location from 'expo-location'

import { LAT_LNG_DELTA, SEARCH_RANGE, LOCATION_UPDATE_INTERVAL} from "../../StaticData/MapParams";

import Loading from "../global/Loading";

export default function Map({isRunning, coordinates, setCoordinates}) {
    const [state, setState] = useState(false)
    const [locationSubscription, setLocationSubscription] = useState(null)

    const requestPermission = async _=> {
        //위치정보 권한 요청
        let { status } = await Location.requestForegroundPermissionsAsync()
        if(status!=='granted') {
            console.log('위치정보 제공 동의 안함')
            return null
        }
        return status
    }

    const initialLocations = async _=> {
        setState(false)
        try{
            const permission = await requestPermission()
            if(!permission) return false    

            const location = await Location.getCurrentPositionAsync() // 기본 위치 정보
            const {longitude, latitude} = location.coords // 위도, 경도 분할
            
            setCoordinates((prevCoordinates) => [...prevCoordinates, {longitude, latitude}])
            setState(true)
            return  true 
        }
        catch(e) {
            console.log(e)
        }
    }

    const initialize = async _=> {
        const locationState = await initialLocations()
        if(!locationState) {
            console.log('위치정보를 가져오는데 실패함')
            setState(true)
        }
    }

    useEffect(_=> {
        initialize()
    }, [])


    useEffect(() => {
        const handleLocationChange = (location) => {
            if(isRunning) {
                const {longitude, latitude} = location.coords
                setCoordinates((prevCoordinates) => [...prevCoordinates, {longitude, latitude}])
            }
        }

        const startLocationSubscription = async () => {
            const subscription = await Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High, distanceInterval: 1 },
                handleLocationChange
            )
            setLocationSubscription(subscription)
        }

        const stopLocationSubscription = () => {
            if(locationSubscription) {
                locationSubscription.remove()
            }
            
        }

        if(isRunning) {
            startLocationSubscription()
        }
        else {
            stopLocationSubscription()
        }
    }, [isRunning])

    

    useEffect(() => {
        if(coordinates.length>1) {
            setCoordinates(coordinates)
        }
    }, [coordinates])




    return (
        <View style={{flex: 1}}>
            {
                !state
                ?
                <Loading />
                :
                <MapView
                style={{flex:1}}
                initialRegion={{
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude,
                    latitudeDelta: coordinates[0].latitudeDelta ? coordinates[0].latitudeDelta : LAT_LNG_DELTA.DEFAULT[0],
                    longitudeDelta: coordinates[0].longitudeDelta ? coordinates[0].longitudeDelta : LAT_LNG_DELTA.DEFAULT[1],
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                userLocationUpdateInterval={LOCATION_UPDATE_INTERVAL.ONE_SECONDS}
                // onRegionChangeComplete={e => setCoords({latitude: e.latitude, longitude: e.longitude})}
                >
                    {
                        coordinates.length > 0 && (
                            <>
                            <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="blue" />
                            </>
                        )
                    }
                </MapView>

            }
            
        </View>
    )
}
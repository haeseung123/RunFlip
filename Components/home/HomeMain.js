import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { getJsonData } from "../../Funclibrary/Storage";
import { format } from "date-fns";

import HomeProfile from "./HomeProfile";
import HomeRecord from "./HomeRecord";
import Calendars from "./Calendars";

import homeMainStyles from "../../Styles/home/homeMainStyles";

export default function HomeMain() {
    const [selected, setSelected] = useState(format(new Date(), "yyyy-MM-dd"))
    const [recordData, setRecordData] = useState([])
    const [resultData, setResultData] = useState({})

    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = async () => {
        const result = await getJsonData('record')
        const dataArray = Object.entries(result.value)
        setResultData(result.value)
        setRecordData(dataArray)
    }
    // console.log(resultData)
    const selectedData = resultData[selected] || []
    

    return (
        <View style={homeMainStyles.container}>
            <HomeProfile></HomeProfile>
            <Calendars recordData={recordData} setSelected={setSelected}></Calendars>
            <HomeRecord  selectedData={selectedData} selected={selected}></HomeRecord>
        </View>
    )
}
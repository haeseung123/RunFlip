import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { getJsonData } from "../../Funclibrary/Storage";
import runningRecordStyles from "../../Styles/record/runningRecordStyles";

export default function RunningRecords() {
    const [recordData, setRecordData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getAllData() {
            const result = await getJsonData('record')
            const dataArray = Object.entries(result.value)
            // console.log('test1', dataArray)
            setRecordData(dataArray)
            // console.log('test2', recordData)
            // setIsLoading(false)
        }
        
        getAllData()
    }, [])

    // console.log('test3', recordData)


    const groupDataByMonth  = (data) => {
        const groupedData = {}

        data.forEach(([date, items]) => {
            const [year, month] = date.split('-')
            const monthKey = `${year}년 ${parseInt(month)}월`

            const dateObject = new Date(`${year}-${month}-01`)
            const dayOfWeek = dateObject.getDay()

            const dayOfWeekNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
            const dayOfWeekName = dayOfWeekNames[dayOfWeek]

            if (!groupedData[monthKey]) {
                groupedData[monthKey] = []
            }

            groupedData[monthKey].push(...items)
        })

        return groupedData
    }

    const groupedRecordData = groupDataByMonth(recordData)

    const handleInnerItemPress = (data) => {
        // console.log(data)
    }

    const renderInnerItem = (item) => {
        const dateString = item.endTime
        const dateOnly = dateString.split(" ")[0]
        const [year, month, day] = dateOnly.split(".")
        const parsedDate = new Date(year, month - 1, day)

        const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        const dayOfWeek = daysOfWeek[parsedDate.getDay()]


        return (
            <TouchableOpacity
            style={runningRecordStyles.innerItemWrap}
            onPress={() => handleInnerItemPress(item)}
            >
                <View style={runningRecordStyles.itemDate}>
                    <Text style={runningRecordStyles.dayOfWeek}>{dayOfWeek}</Text>
                    <Text style={runningRecordStyles.day}>{day}</Text>
                </View>
                <View style={runningRecordStyles.itemWrap}>
                    <Text>{item.comment}</Text>
                    <Text style={runningRecordStyles.itemData}>{item.elapsedTime} / {item.totalDistance} / {item.pace}</Text>
                </View>
                <View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderMonthItem = ({ item }) => {
        const [month, data] = item
        return (
            <View key={month} style={runningRecordStyles.monthKeyWrap}>
                <Text style={runningRecordStyles.monthKey}>{month}</Text>
                <FlatList 
                    keyExtractor={(item, index) => index.toString()}
                    data={data.reverse()}
                    renderItem={({ item }) => renderInnerItem(item)}
                />
            </View>
        );
    }

    return (
        <View style={{flex:1}}>
            {
                !recordData.length
                ?
                <View>
                    <Text>데이터가 없어요 ㅠㅠ</Text>
                </View>
                :
                <FlatList 
                        keyExtractor={(item, index) => index.toString()}
                        data={Object.entries(groupedRecordData).reverse()}
                        renderItem={renderMonthItem}
                />
            }
        </View>
    )
}
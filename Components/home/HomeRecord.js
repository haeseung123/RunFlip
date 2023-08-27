import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { format } from "date-fns";

import homeRecordStyles from "../../Styles/home/homeRecordStyles";
import runningRecordStyles from "../../Styles/record/runningRecordStyles";


export default function HomeRecord({ selectedData, selected }) {
    const result = selectedData[0]

    const today = format(new Date(), "yyyy-MM-dd")
    const [year, month, day] = selected.split("-")

    const formattedMonth = parseInt(month).toString().padStart(2, '0')
    const parsedDate = new Date(year, formattedMonth - 1, day)

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const dayOfWeek = daysOfWeek[parsedDate.getDay()]   



    return (
        <View style={homeRecordStyles.container}>
            {
                today === selected
                ?
                <Text style={homeRecordStyles.text}>오늘의 운동 기록</Text>
                :
                <Text style={homeRecordStyles.text}>운동 기록</Text>
            }
            <View style={homeRecordStyles.innerItemWrap}>
                <View style={runningRecordStyles.itemDate}>
                    <Text style={runningRecordStyles.dayOfWeek}>{dayOfWeek}</Text>
                    <Text style={runningRecordStyles.day}>{day}</Text>
                </View>
                {
                    result !== undefined
                    ?
                    <View style={runningRecordStyles.itemWrap}>
                        <Text>{result.comment}</Text>
                        <Text style={runningRecordStyles.itemData}>{result.elapsedTime} / {result.totalDistance} / {result.pace}</Text>
                    </View>
                    :
                    <View style={runningRecordStyles.itemWrap}>
                        <Text style={homeRecordStyles.noDataText}>운동하세요!</Text>
                    </View>

                }
                
            </View>
            
        </View>
    )
}

import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

import calendarsStyles from "../../Styles/home/calendarsStyles";

LocaleConfig.locales['fr'] = {
    monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토']
}

LocaleConfig.defaultLocale = 'fr'

export default function Calendars({ recordData, setSelected }) {
    // const [selected, setSelected] = useState(format(new Date(), "yyyy-MM-dd"))
    // console.log(selected)

    // console.log(recordData)

    const markedDates = {};
    recordData.forEach(([date, data]) => {
        if (data.length > 0) {
            markedDates[date] = { 
                marked: true, 
                dotColor: '#D6E0FA',
                customStyles: {
                    container: { backgroundColor: '#D6E0FA' },
                }
            }
        }
    })

    return (
        <View style={calendarsStyles.container}>
            <Calendar  
            style={calendarsStyles.calendar}
            theme={{
                textMonthFontSize: 20,
                arrowColor: '#274490',
                textMonthFontWeight: 'bold',
                todayTextColor: '#FFFFFF',
                todayBackgroundColor: '#FF0000'
            }}
            markingType={'custom'}
            markedDates={markedDates}
            onDayPress={(day) => {
                setSelected(day.dateString)
            }}
            />
        </View>
        
    )
}
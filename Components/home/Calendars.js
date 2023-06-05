import React from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

import calendarsStyles from "../../Styles/home/calendarsStyles";

export default function Calendars() {
    return (
        <Calendar style={calendarsStyles.container} />
    )
}
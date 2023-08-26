import React from "react";
import { View, StyleSheet, Text } from "react-native";

import HomeProfile from "./HomeProfile";
import HomeRecord from "./HomeRecord";
import Calendars from "./Calendars";

import homeMainStyles from "../../Styles/home/homeMainStyles";

export default function HomeMain() {
    return (
        <View style={homeMainStyles.container}>
            <HomeProfile></HomeProfile>
        </View>
    )
}
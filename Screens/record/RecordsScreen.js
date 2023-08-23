import React, { useEffect } from "react";
import { View, Text } from "react-native";

import RunningRecords from "../../Components/record/RunningRecords";
import Menubar from "../../Components/Menubar";

export default function RecordsScreen() {
    
    
    return (
        <View style={{flex:1}}>
            <RunningRecords></RunningRecords>
            <Menubar></Menubar>
        </View>
    )
}
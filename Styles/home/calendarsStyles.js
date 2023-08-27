import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.535,
        marginTop: normalizeSize(5),
        
    },
    calendar: {
        height: normalizeSize(370),
    }
})
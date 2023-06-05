import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.08,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: normalizeSize(60),
        width: '120%',
        backgroundColor: 'white'
    },
    profileWrap: {
        flexDirection: 'column',
        // paddingTop: 
    },
    imageStyle: {
        width: normalizeSize(40),
        height: normalizeSize(40),
        borderRadius: normalizeSize(30)
    },
    userName: {
        fontSize: normalizeSize(14),
        paddingBottom: 5
    },
    stateMessege: {
        fontSize: normalizeSize(19)
    }
})
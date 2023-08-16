import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";


export default StyleSheet.create({
    controlPanelWarpper: {
        flex: 1,
        backgroundColor: 'white',
    },
    timerWrapper: {
        flex: .8
    },
    buttonWrapper: {
        flex: 1.2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    buttonStyle: {
        width: normalizeSize(55),
        height: normalizeSize(55),
        margin: normalizeSize(15),
        borderWidth: normalizeSize(1),
        borderRadius: normalizeSize(50),
        borderColor: 'red',
        backgroundColor: 'white',

    },
    buttonTextStyle: {
        fontSize: normalizeSize(13),
        textAlign: 'center',
    },
    distanceWrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    },
    distanceTextStyle: {
        fontSize: normalizeSize(14)
    },
    distanceStyle: {
        fontSize: normalizeSize(18),
        fontWeight: 'bold'
    }
})
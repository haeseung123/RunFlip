import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";


export default StyleSheet.create({
    controlPanelWarpper: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 17,
    },
    timerWrapper: {
        flex: .8
    },
    buttonWrapper: {
        flex: 1.2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: normalizeSize(20),
    },
    buttonStyle: {
        width: normalizeSize(55),
        height: normalizeSize(55),
        margin: normalizeSize(15),
        borderWidth: normalizeSize(1),
        borderRadius: normalizeSize(50),
        borderColor: 'red',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    buttonStyle2: {
        width: normalizeSize(55),
        height: normalizeSize(55),
        margin: normalizeSize(15),
        borderWidth: normalizeSize(1),
        borderRadius: normalizeSize(50),
        borderColor: '#274490',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontSize: normalizeSize(14),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    distanceWrapper: {
        position: 'absolute',
        right: normalizeSize(25),
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
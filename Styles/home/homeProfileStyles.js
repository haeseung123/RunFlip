import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.25,
        paddingTop: normalizeSize(60),
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center'
    },
    userDataWrap: {
        flexDirection: 'row',
        width: normalizeSize(330),
        justifyContent: 'space-between',
    },
    profileWrap: {
        flexDirection: 'column',
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
    stateMessage: {
        fontSize: normalizeSize(19),
        fontWeight: 'bold'
    },
    runningDataWrap: {
        flex: 1,
        width: normalizeSize(330),
    },
    recordTitle: {
        fontSize: normalizeSize(16),
        marginTop: normalizeSize(20),
        color: 'red'
    },
    recordWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: normalizeSize(10),
        height: normalizeSize(50)
    },
    distanceWrap: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    distanceData: {
        fontSize: normalizeSize(35),
        fontWeight: 'bold'
    },
    twoRecordWrap: {
        flexDirection: 'column',
        alignItems: 'flex-end'

    },
    dataWrap: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingTop: normalizeSize(1),
        paddingBottom: normalizeSize(1)
    },
    recordsData: {
        fontSize: normalizeSize(18),
        fontWeight: 'bold'
    },
    dataText: {
        color: '#9E9E9E'
    }
})
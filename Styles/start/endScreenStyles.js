import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    dataContainer: {
        flex: 0.65,
        backgroundColor: 'white',
        marginTop: normalizeSize(5)
    },
    mapWrapper: {
        flex: 1,
    },
    titleWrapper: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: normalizeSize(16),
    },
    timeText: {
        color: 'grey'
    },
    mapView: {
        flex: 1,
    },
    dataWrapper: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataWrap: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    data: {
        fontSize: normalizeSize(22),
        fontWeight: 'bold',
        marginTop: normalizeSize(5)
    },
    text: {
        color: 'grey',
        marginBottom: normalizeSize(5)
    },
    
})
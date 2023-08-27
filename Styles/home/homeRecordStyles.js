import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.210,
        marginTop: normalizeSize(5),
        backgroundColor: 'white',
        alignItems: 'center'
    },
    text: {
        width: normalizeSize(320),
        fontSize: normalizeSize(15),
        fontWeight: 'bold',
        marginTop: normalizeSize(20),
        marginBottom: normalizeSize(5)
    },
    innerItemWrap: {
        backgroundColor: '#F5F8FF',
        flexDirection: 'row',
        width: normalizeSize(320),
        borderRadius: normalizeSize(10),
        margin: normalizeSize(5)
    },
    noDataText: {
        color: '#9E9E9E',
        fontWeight: 'bold'
    }

})
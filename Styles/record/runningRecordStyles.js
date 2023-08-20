import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    monthKeyWrap: {
        flex: 1,
        marginBottom: normalizeSize(10),
        alignItems: 'center'
    },
    monthKey: {
        fontSize: normalizeSize(24),
        fontWeight: 'bold',
        marginTop: normalizeSize(20),
        marginBottom: normalizeSize(10)
    },
    innerItemWrap: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: normalizeSize(320),
        borderRadius: normalizeSize(10),
        margin: normalizeSize(5)
    },
    itemDate: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: normalizeSize(20)

    },
    dayOfWeek: {
        fontSize: normalizeSize(16),
        fontWeight: 'bold',
    },
    day: {
        fontSize: normalizeSize(22),
        fontWeight: 'bold'
    },
    itemWrap: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    itemData: {
        color: '#4B4B4B',
        fontWeight: '500'
    }

})
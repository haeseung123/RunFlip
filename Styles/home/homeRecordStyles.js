import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.16,
        width: '100%',
        backgroundColor: 'white'
    },
    title: {
        color: 'red',
        fontSize: normalizeSize(15),
        fontWeight: 'bold',
        paddingTop: normalizeSize(10),
        paddingLeft: normalizeSize(30)
    },
    recordWrap: {
        flexDirection: 'row',
        // justifyContent: 'space-around'
    }

})
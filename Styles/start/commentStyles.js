import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    commentContainer: {
        flex: 0.35,
        marginTop: normalizeSize(5),
        backgroundColor: 'white',

        alignItems: 'center'
    },
    commentWrapper: {
        flex: 1,
        margin: normalizeSize(20)
    },
    inputText: {
        backgroundColor: '#E8EEFF',
        justifyContent: 'center',
        width: normalizeSize(318),
        height: normalizeSize(40),
        borderRadius: normalizeSize(10),
        paddingLeft: normalizeSize(10),
        marginTop: normalizeSize(10)
    },
    text: {
        paddingLeft: normalizeSize(10),
    }
})



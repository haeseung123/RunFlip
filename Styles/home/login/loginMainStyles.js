import { StyleSheet } from "react-native";
import { normalizeSize } from "../../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 0.4
    },
    textStyle: {
        color: '#696969',
        marginBottom: normalizeSize(10),
    }
    ,
    input: {
        fontSize: normalizeSize(17),
        width: normalizeSize(300),
        height: normalizeSize(30),
        marginBottom: normalizeSize(20),
        paddingBottom: normalizeSize(10),
        borderBottomWidth: normalizeSize(1),
        borderBottomColor: '#DCDCDC',
    }
})
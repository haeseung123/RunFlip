import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.35,
        backgroundColor: 'white',
        marginTop: normalizeSize(5),
        alignItems: 'center',
        
    },
    imageSytle: {
        marginTop: normalizeSize(50),
        marginBottom: normalizeSize(3),
        width: normalizeSize(150),
        height: normalizeSize(150),
        borderRadius: normalizeSize(150)
    }
})
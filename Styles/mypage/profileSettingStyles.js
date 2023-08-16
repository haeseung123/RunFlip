import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 0.65,
        alignItems: 'center',
    },
    userInfoContainer: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    infoOrderWrap: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    userInfoWrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
    },
    repairBtnWrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    statusMessageWrapper: {
        
    },
    statusMessage: {
    }

})
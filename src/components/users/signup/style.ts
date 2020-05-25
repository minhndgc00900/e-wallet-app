import { getWindowHeight, STATUSBAR_HEIGHT } from '../../../constants/'
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        height: getWindowHeight() - STATUSBAR_HEIGHT - 56,
        paddingVertical: 16
    },
    logo: {
        height: 70,
        width: 180,
        resizeMode: "contain",
        marginTop: 36,
        marginBottom: 36,
    },
    textColor: {
        color: '#000'
    },
    slogan: {
        flexDirection: "row",
        marginVertical: 50,
        alignItems: "center",
    },
    sloganLogo: {
        height: 80,
        width: 60,
        resizeMode: "contain",
        marginRight: 16,
        alignItems: 'flex-start'
    },
    sloganText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1d3051",
    },
    label: {
        justifyContent: "center",
        textAlign: 'center',
        paddingTop: 16
    },
    terms: {
        fontSize: 15,
        color: "#607baa",
        textDecorationLine: "underline",
    },
    buttonOutline: {
        padding: 16,
    },
    buttonOutlineText: {
        textDecorationLine: "underline",
        color: "#1d3051",
    },
});

export default styles;

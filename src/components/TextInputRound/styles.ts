import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    layout: {
        alignSelf: 'stretch'
    },
    inputRound: {
        position: 'relative',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#BCCD00',
        textAlign: 'center',
        padding: 14,
        fontWeight: 'bold',
        fontSize: 16,
    },
    viewLabel: {
        position: 'absolute', 
        backgroundColor: '#fff', 
        alignSelf: 'center',
        paddingHorizontal: 16,
        top: 30, 
        zIndex: 10
    },
    label: {
        color: '#1d3051',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 16
    },
    rightIcon: {
        position: 'absolute',
        right: 12,
        top: 12,
        padding: 16,
    },
    pinSecureView: {
        position: 'absolute', top: 21, alignSelf: 'center', justifyContent: 'center', height: 32, minWidth: 200
    },
    pinSecureText: {
        textAlign: 'center', fontSize: 20, letterSpacing: 12, color: 'black'
    }
})

export default styles
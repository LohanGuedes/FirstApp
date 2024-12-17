import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        width: "100%",
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        alignItems: "center"
    },

    name: {
        flex: 1,
        color: "#FFF",
        fontSize: 16,
        marginLeft: 16,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 24,
        lineHeight: 24,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#e23c44",
        alignItems: "center",
        justifyContent: "center",
    }
})

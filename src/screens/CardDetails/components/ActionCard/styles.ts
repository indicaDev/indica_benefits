import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        borderRadius: 10,
        borderColor: "#DEDEDE",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    containerIsActive: {
        backgroundColor: '#F5F5F5'
    },
    containerDisabled: {
        backgroundColor: '#FFFDFD'
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    titleIsActive: {
        color: '#9796A1'
    },
    titleDisabled: {
        color: '#D7DCE4'
    }
})

export default styles;
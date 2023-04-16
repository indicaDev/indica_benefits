import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        color: '#9796A1',
        marginBottom: 5
    },
    search: {
        height: 65,
        borderRadius: 10,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    iconContainer: {
        top: 15,
    },
    inputIOS: {
      height: 65,
      borderRadius: 10,
      fontSize: 20,
      color: '#C4C4C4',  
    },
    inputAndroid: {
        height: 65,
        borderRadius: 10,
        fontSize: 20,
        color: '#C4C4C4',
    }
});

export default styles;

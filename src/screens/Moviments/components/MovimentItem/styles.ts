import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5B5B5E'
    },
    date: {
        fontSize: 16,
        fontWeight: '600',
        color: '#9796A1',
        marginTop: 5
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: '#9796A1',
    }
})

export default styles
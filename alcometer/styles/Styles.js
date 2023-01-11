import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'stretch',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        margin: 10
    },
    title:{
        fontSize: 32,
        textAlign: "center"
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10
    },
    label:{
        // flex: 1,
        fontSize: 18,
        fontWeight: "bold"
    },
    result:{
        color: '#b00000',
        fontSize: 18,
        fontWeight: "bold"
    },
    radio:{
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioInner:{
        width: 15,
        height: 15,
        borderWidth: 1, 
        borderRadius: 7.5,
        backgroundColor: "blue"
        
    }
});
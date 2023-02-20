import { StyleSheet } from "react-native";

const lightContent = "#ffffff"
const darkContent = "#1c1917"
const lightBackground = "#B7D5D4"
const darkBackground = "#121420"


const darkStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: darkBackground,
        padding: 20
    },
    switch:{
        marginTop: 20
    },
    title:{
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
        color: lightContent
    },
    textInput:{
        padding: 10,
        borderWidth: 2,
        marginBottom: 10,
        fontSize: 25,
        borderTopColor: "#00000000",
        borderLeftColor: "#00000000",
        borderRightColor: "#00000000",
        color: lightContent
    },
    label:{
        fontSize: 18,
        fontWeight: "bold",
        color: lightContent
    },
    result:{
        green:{
            color: 'green',
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center"
        },
        red:{
            color: 'red',
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center"
        },
        yellow:{
            color: 'yellow',
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center"
        },
    },
    radio:{
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: lightContent
    },
    radioInner:{
        width: 15,
        height: 15, 
        borderRadius: 7.5,
        backgroundColor: lightContent
        
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#2C2B3C",
    },
    buttonText: {
        fontWeight: "bold",
        color: lightContent
    }
    
});

const lightStyle = StyleSheet.create({
    container: {
        ...darkStyle.container,
        backgroundColor: lightBackground
    },
    switch:{
        ...darkStyle.switch,
        marginTop: 20
    },
    title:{
        ...darkStyle.title,
        color: darkContent,
    },
    textInput:{
        ...darkStyle.textInput,

        color: darkContent

    },
    label:{
        ...darkStyle.label,
        color: darkContent

    },
    result:{
        ...darkStyle.result,

    },
    radio:{
        ...darkStyle.radio,
        borderColor: darkContent

    },
    radioInner:{
        ...darkStyle.radioInner,
        backgroundColor: "#CD5334"
    },
    button:{
        ...darkStyle.button,
        backgroundColor: "#CD5334"
    },
    buttonText: {
        ...darkStyle.buttonText,
        color: darkContent
    }
});
export {darkStyle,lightStyle};

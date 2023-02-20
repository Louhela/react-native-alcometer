import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Pressable} from 'react-native';
import { darkStyle } from '../styles/Styles.js';
import NumericInput from 'react-native-numeric-input'


export default function AlchoholLevel(props){

    let Styles = props.theme;

    const genders = ["Male", "Female"];

    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [hours, setHours] = useState(0);
    const [gender, setGender] = useState("Male")
    const [result, setResult] = useState(0)



    const weightAlert = (title, message) => {
      Alert.alert(
        title,
        message,
        [
           {
            text: "Ok"
           }
        ]
      );
    }
    
    function CalculateAlcholLevel(){
        if (weight == 0) {
        let title = "Error"
        let message = "Please input weight"
        weightAlert(title, message)
        return
        }

        // Calculating the blood alcohol level
        var liters = bottles * 0.33
        var grams = liters * 8 * 4.5
        var burning = weight / 10
        var gramsLeft = grams - burning * hours
    
        // If Male is selected as gender the multiplier will be 0.7 else (when female is selected as gender) the multiplier will be 0.6
        var multiplier = gender == "Male" ? 0.7 : 0.6
        
    
        // The result of the calculations
        var calculatedAlcoholLevel = (gramsLeft / (weight * multiplier))
        
        // Setting the result. If calculated value is lower than 0 then the result will be set at 0.
        setResult(calculatedAlcoholLevel > 0 ? calculatedAlcoholLevel : 0)
    
    }
  
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>Alcometer</Text>
        <View>
        <Text style={Styles.label}>Weight:</Text>
        <TextInput 
          keyboardType='number-pad' 
          value={weight}
          style={Styles.textInput}
          onChangeText={value => setWeight(value)}
        />
        </View>
        <View>
        <Text style={Styles.label}>Bottles</Text>
          <NumericInput
          minValue={0}
          rounded
          textColor = {props.theme == darkStyle ? '#FFF' : '#000'}
          borderColor = "#00000000"
          iconStyle={{ color: 'white' }} 
          rightButtonBackgroundColor= {props.theme == darkStyle ? '#2C2B3C' : '#CD5334'} 
          leftButtonBackgroundColor= {props.theme == darkStyle ? '#2C2B3C' : '#CD5334'} 
  
          onChange={value => setBottles(value)} />
  
        <Text style={Styles.label}>Hours</Text>
          <NumericInput
          minValue={0}
          
          rounded
          textColor = {props.theme == darkStyle ? '#FFF' : '#000'}
          borderColor = "#00000000"
          iconStyle={{ color: 'white' }} 
          rightButtonBackgroundColor= {props.theme == darkStyle ? '#2C2B3C' : '#CD5334'} 
          leftButtonBackgroundColor= {props.theme == darkStyle ? '#2C2B3C' : '#CD5334'} 
  
          onChange={value => setHours(value)} />
        </View>
  
        <View>
          <View>
            {genders.map(genderInput => (
                <View key={genderInput}>
                  <Text style={Styles.label}>{genderInput}</Text>
                    <TouchableOpacity
                      style={Styles.radio}
                      onPress={() => setGender(genderInput)}>
                      {gender === genderInput && <View style={Styles.radioInner} />}
                    </TouchableOpacity>
                </View>
            ))}
          </View>
        </View>
  
        
        <Pressable style = {Styles.button} onPress={CalculateAlcholLevel}>
          <Text style={Styles.buttonText}>CALCULATE</Text>
        </Pressable>
        <Text style={ result == 0 ? Styles.result.green 
                      : result >= 0.5 ?  Styles.result.red
                      : Styles.result.yellow}>{result.toFixed(2)}
        </Text>
      </View>
    );
  }
  
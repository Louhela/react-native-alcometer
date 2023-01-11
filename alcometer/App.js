import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Styles from './styles/Styles.js';
import NumericInput from 'react-native-numeric-input'


export default function App() {
  return (
    <View style={Styles.container}>
      <SumView />
      <GenderSelector />
    </View>
  );
}

function GenderSelector(){
  const genders = ["Male", "Female", "Dog"];
  const [gender, setGender] = useState("Male")
  
  return( 
  <View>
    <Text>Gender: {gender}</Text>
    <View>
      {genders.map(genderInput => (
          <View key={genderInput}>
            <Text>{genderInput}</Text>
              <TouchableOpacity
                style={Styles.radio}
                onPress={() => setGender(genderInput)}>
                {gender === genderInput && <View style={Styles.radioInner} />}
              </TouchableOpacity>
          </View>
      ))}
    </View>
  </View>
  )
}



function SumView(){
  const genders = [{label:"Male", value: 'male'},{label:"Female", value: 'female'}];
  

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState(genders[0].value)

  return (
    <View>
      <Text style={Styles.label}>Weight:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={weight}
        style={Styles.textInput}
      />
      <Text style={Styles.label}>Bottles</Text>
        <NumericInput
        minValue={0}
        onChange={value => console.log(value)} />

      <Text style={Styles.label}>Hours</Text>
        <NumericInput
        minValue={0}
        onChange={value => console.log(value)} />
{/* 
      <Text style={Styles.label}>Gender</Text>
            <RadioForm
                radio_props={genders} 
                initial={0}
                onPress={value => setGender(value)}
            /> */}
      {/* <TextInput 
        keyboardType='number-pad' 
        value={bottles}
        style={Styles.textInput}
        
      /> */}


      <Button title='Sum' />
      <Text>Sum is 10</Text>
    </View>
  );
}


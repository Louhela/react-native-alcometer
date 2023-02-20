import { useState } from 'react';
import { Switch, ScrollView } from 'react-native';
import { darkStyle, lightStyle } from './styles/Styles.js';
import AlchoholLevel from './components/AlcoholLevel.js';

export default function App() {
  const [isDark, setisDark] = useState(false)
  let Styles = isDark ? darkStyle : lightStyle;

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Switch
          style={Styles.switch}
          value={isDark}
          onValueChange={newValue => setisDark(newValue)}/>
      <AlchoholLevel theme = {Styles}/>
    </ScrollView>
  );
}

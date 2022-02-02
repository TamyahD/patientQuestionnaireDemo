// Tamyah Downes
// ITN

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home'
import Questionnaire from './screens/questionnaire'

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        {/* Screen Components */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Questionnaire" component={Questionnaire} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
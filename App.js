import React from 'react';

import Home from './src/pages/home';
import Camera from './src/pages/camera';
import Information from './src/pages/information';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Camera"
          component={Camera}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Information"
          component={Information}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

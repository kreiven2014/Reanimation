// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/feature/main/HomeScreen';
import DetailsScreen from './src/feature/details/DetailsScreen';

import ReanimatedNavigator from './src/reanimated-2/ReanimationNavigator';
import YoutubeNavigator from './src/feature/youtube/YoutubeNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}

      <YoutubeNavigator />

      {/* <ReanimatedNavigator /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

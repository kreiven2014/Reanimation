// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlayerProvider from '../youtube/PlayerProvider';

import Home from './Home';

const Stack = createNativeStackNavigator();

const YoutubeNavigator = () => {
  return (
    <PlayerProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="YoutubeHome"
          component={Home}
          options={{
            title: 'Youtube Home Page',
          }}
        />
        {/* <Stack.Screen
        name="Worklets"
        component={Worklets}
        options={{
          title: 'Worklets',
        }}
      /> */}
      </Stack.Navigator>
    </PlayerProvider>
  );
};

export default YoutubeNavigator;

// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/feature/main/HomeScreen';
import DetailsScreen from './src/feature/details/DetailsScreen';

import Examples from './src/reanimated-2/Examples';
import PanGesture from './src/reanimated-2/PanGesture';
import Transitions from './src/reanimated-2/Transitions';
import Worklets from './src/reanimated-2/Worklets';
import Coinbase from './src/reanimated-2/Coinbase';
import JellyScroll from './src/reanimated-2/JellyScroll';
import MaskedView from './src/reanimated-2/MaskedView';
import Accordion from './src/reanimated-2/Accordion';
import Wave from './src/reanimated-2/Wave';
import Fluid from './src/reanimated-2/Fluid';
import ZAnimations from './src/reanimated-2/ZAnimations';
import StrokeAnimation from './src/reanimated-2/StrokeAnimation';
import StickyShapes from './src/reanimated-2/StickyShapes';
import DVDLogo from './src/reanimated-2/DVDLogo';
import Breathe from './src/reanimated-2/Breathe';
import Nokia from './src/reanimated-2/Nokia';
import PizzaChallenge from './src/reanimated-2/PizzaChallenge';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen
          name="Examples"
          component={Examples}
          options={{
            title: 'Reanimated 2 Examples',
          }}
        />
        <Stack.Screen
          name="Worklets"
          component={Worklets}
          options={{
            title: 'Worklets',
          }}
        />
        <Stack.Screen
          name="PanGesture"
          component={PanGesture}
          options={{
            title: 'PanGesture',
          }}
        />
        <Stack.Screen
          name="Transitions"
          component={Transitions}
          options={{
            title: 'Transitions',
          }}
        />
        <Stack.Screen
          name="Chart"
          component={Coinbase}
          options={{
            title: 'Coinbase',
            header: () => null,
          }}
        />
        <Stack.Screen
          name="JellyScroll"
          component={JellyScroll}
          options={{
            title: 'Jelly Scroll',
          }}
        />
        <Stack.Screen
          name="MaskedView"
          component={MaskedView}
          options={{
            title: 'Masked View',
          }}
        />
        <Stack.Screen
          name="Accordion"
          component={Accordion}
          options={{
            title: 'Accordion',
          }}
        />

        <Stack.Screen
          name="Wave"
          component={Wave}
          options={{
            title: 'Wave',
          }}
        />

        <Stack.Screen
          name="Fluid"
          component={Fluid} // not sure if working with rn-3
          options={{
            title: 'Soft Body Fluid',
          }}
        />

        <Stack.Screen
          name="StrokeAnimation"
          component={StrokeAnimation}
          options={{
            title: 'Stroke Animation',
          }}
        />
        {/*
        {/* <Stack.Screen
          name="ZAnimations"
          component={ZAnimations}
          options={{
            title: 'ZAnimations',
          }}
        /> */}

        <Stack.Screen
          name="StickyShapes"
          component={StickyShapes}
          options={{
            title: 'Sticky Shapes',
            header: () => null,
          }}
        />

        <Stack.Screen
          name="DVDLogo"
          component={DVDLogo}
          options={{
            title: 'DVD Logo',
            header: () => null,
          }}
        />

        <Stack.Screen
          name="PizzaChallenge"
          component={PizzaChallenge}
          options={{
            title: '🍕 Pizza Challenge',
          }}
        />

        <Stack.Screen
          name="Breathe"
          component={Breathe}
          options={{
            title: '🧘 Breathe',
          }}
        />
        <Stack.Screen
          name="Nokia"
          component={Nokia}
          options={{
            title: '📱 Nokia',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

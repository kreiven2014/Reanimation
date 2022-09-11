// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Examples from './Examples';
import PanGesture from './PanGesture';
import Transitions from './Transitions';
import Worklets from './Worklets';
import Coinbase from './Coinbase';
import JellyScroll from './JellyScroll';
import MaskedView from './MaskedView';
import Accordion from './Accordion';
import Wave from './Wave';
import Fluid from './Fluid';
import StrokeAnimation from './StrokeAnimation';
import StickyShapes from './StickyShapes';
import DVDLogo from './DVDLogo';
import Breathe from './Breathe';
import Nokia from './Nokia';
import PizzaChallenge from './PizzaChallenge';

const Stack = createNativeStackNavigator();

function ReanimatedNavigator() {
  return (
    <Stack.Navigator>
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
  );
}

export default ReanimatedNavigator;

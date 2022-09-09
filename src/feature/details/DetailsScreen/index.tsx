import React from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';

const DetailsScreen = (): Node => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroincColor: 'red',
      }}>
      <Text>Details Screen Mikle</Text>
    </View>
  );
};

export default DetailsScreen;

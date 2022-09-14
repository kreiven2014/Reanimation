// @flow
import * as React from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import VideoThumbnail from './components/VideoThumbnail';
import videos from './videos';

type HomeProps = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends React.PureComponent<HomeProps> {
  render() {
    return (
      <GestureHandlerRootView>
        <ScrollView style={styles.container}>
          {videos.map(video => (
            <VideoThumbnail key={video.id} {...{video}} />
          ))}
        </ScrollView>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

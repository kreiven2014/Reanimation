import React, {memo} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Animated, {Easing, GestureHandlers} from 'react-native-reanimated';

import {type Video as VideoModel} from '../videos';
// import Video from 'react-native-video';
// import VideoContent from './VideoContent';
// import PlayerControls, { PLACEHOLDER_WIDTH } from './PlayerControls';

// const { Animated, Easing } = DangerZone;
const {width, height} = Dimensions.get('window');
// const { statusBarHeight } = Constants;
// const minHeight = 64;
// const midBound = height - 64 * 3;
// const upperBound = midBound + minHeight;
// const {
//   Extrapolate,
//   Value,
//   Clock,
//   cond,
//   eq,
//   set,
//   add,
//   sub,
//   multiply,
//   lessThan,
//   clockRunning,
//   startClock,
//   spring,
//   stopClock,
//   event,
//   interpolate,
//   timing,
//   neq,
// } = Animated;
// const AnimatedVideo = Animated.createAnimatedComponent(Video);
// const shadow = {
//   alignItems: 'center',
//   shadowColor: 'black',
//   shadowOffset: { width: 0, height: 0 },
//   shadowOpacity: 0.18,
//   shadowRadius: 2,
// };

// function runSpring(clock: Clock, value: Value, dest: Value): Value {
//   const state = {
//     finished: new Value(0),
//     velocity: new Value(0),
//     position: new Value(0),
//     time: new Value(0),
//   };

//   const config = {
//     damping: 20,
//     mass: 1,
//     stiffness: 100,
//     overshootClamping: false,
//     restSpeedThreshold: 1,
//     restDisplacementThreshold: 0.5,
//     toValue: new Value(0),
//   };

//   return [
//     cond(clockRunning(clock), 0, [
//       set(state.finished, 0),
//       set(state.velocity, 0),
//       set(state.position, value),
//       set(config.toValue, dest),
//       startClock(clock),
//     ]),
//     spring(clock, state, config),
//     cond(state.finished, stopClock(clock)),
//     state.position,
//   ];
// }

type VideoModalProps = {
  video: VideoModel;
};

//  class VideoModal extends React.PureComponent<VideoModalProps> {
const VideoModal = (props: VideoModalProps) => {
  return <View style={styles.body}>{/* <AnimatedVideo /> */}</View>;
};

const styles = StyleSheet.create({
  //   body: {
  //     height: Dimensions.get('window').height,
  //   },
  body: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
  },
});

export default memo(VideoModal);

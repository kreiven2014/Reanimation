import React, {memo, useEffect} from 'react';
import {View, Dimensions, StyleSheet, StatusBar} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  add,
  event,
  useSharedValue,
  withTiming,
  Clock,
  multiply,
  cond,
  lessThan,
  sub,
  eq,
  set,
  withSpring,
  neq,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {type Video as VideoModel} from '../videos';
// import Video from 'react-native-video';
import VideoContent from './VideoContent';
import PlayerControls, {PLACEHOLDER_WIDTH} from './PlayerControls';

const {width, height} = Dimensions.get('window');
// const statusBarHeight = StatusBar.currentHeight;
const statusBarHeight = 64;
console.log('statusBarHeight', statusBarHeight);
const minHeight = 64;
const midBound = height - 64 * 3;
const upperBound = midBound + minHeight;

const AnimatedVideo = Animated.createAnimatedComponent(View);
const shadow = {
  alignItems: 'center',
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.18,
  shadowRadius: 2,
};

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
  // animation values
  const translationY = useSharedValue(0);
  const velocityY = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const offsetY2 = useSharedValue(0);

  const gestureState = useSharedValue(State.UNDETERMINED);

  // onGestureEvent: $Call<event>;

  // const onGestureEvent = event(
  //   [
  //     {
  //       nativeEvent: {
  //         translationY,
  //         velocityY,
  //         gestureState,
  //       },
  //     },
  //   ],
  //   {useNativeDriver: true},
  // );

  const x = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      console.log('onGestureEvent');
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      console.log('onActive');
      x.value = ctx.startX + event.translationX;
    },
    onEnd: _ => {
      console.log('onEnd');
      x.value = withSpring(0);
    },
  });

  const slideUp = () => {
    offsetY2.value = withTiming(-upperBound, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  };

  // const clockY = new Clock();
  // const finalTranslateY = add(
  //   add(translationY.value, offsetY.value),
  //   multiply(0.2, velocityY.value),
  // );
  // const snapPoint = cond(
  //   lessThan(finalTranslateY, sub(offsetY.value, height / 4)),
  //   0,
  //   upperBound,
  // );

  // const y = cond(
  //   eq(gestureState.value, State.END),
  //   [
  //     set(
  //       translationY.value,
  //       withSpring(clockY, add(translationY.value, offsetY.value), snapPoint),
  //     ),
  //     set(offsetY.value, translationY),
  //     translationY,
  //   ],
  //   [
  //     cond(eq(state, State.BEGAN), [
  //       stopClock(clockY),
  //       cond(neq(offsetY2, 0), [set(offsetY, 0), set(offsetY2, 0)]),
  //     ]),
  //     add(offsetY.value, translationY.value),
  //   ],
  // );

  const translateY = useSharedValue(0);

  // const {onGestureEvent, translateY: y, offsetY2} = this;
  // const translateY = add(y.value, offsetY2.value);
  // const translateY = interpolate(animation.value, [0, 1], [height, 0]);
  const {video} = props;
  const tY = interpolate(translateY.value, [0, midBound], [0, midBound], {
    extrapolateLeft: Extrapolate.CLAMP,
  });
  const opacity = interpolate(translateY.value, [0, midBound - 100], [1, 0], {
    extrapolateLeft: Extrapolate.CLAMP,
  });
  const statusBarOpacity = interpolate(
    translateY.value,
    [0, statusBarHeight || 0],
    [1, 0],
    {extrapolateLeft: Extrapolate.CLAMP},
  );
  const videoContainerWidth = interpolate(
    translateY.value,
    [0, midBound],
    [width, width - 16],
    {extrapolateLeft: Extrapolate.CLAMP},
  );
  const videoWidth = interpolate(
    translateY.value,
    [0, midBound, upperBound],
    [width, width - 16, PLACEHOLDER_WIDTH],
    {extrapolateLeft: Extrapolate.CLAMP},
  );
  const videoHeight = interpolate(
    translateY.value,
    [0, midBound, upperBound],
    [width / 1.78, minHeight * 1.3, minHeight],
    {extrapolateLeft: Extrapolate.CLAMP},
  );
  const containerHeight = interpolate(
    translateY.value,
    [0, midBound],
    [height, 0],
    {extrapolateLeft: Extrapolate.CLAMP},
  );
  const playerControlOpaciy = interpolate(
    translateY.value,
    [midBound, upperBound],
    [0, 1],
    {extrapolateLeft: Extrapolate.CLAMP},
  );
  return (
    <>
      <Animated.View
        style={{
          height: StatusBar.currentHeight,
          opacity: statusBarOpacity,
          backgroundColor: 'black',
        }}
      />
      <PanGestureHandler
        onHandlerStateChange={onGestureEvent}
        activeOffsetY={[-10, 10]}>
        <Animated.View
          style={{
            transform: [{translateY: tY}],
            ...shadow,
          }}>
          <Animated.View
            style={{backgroundColor: 'white', width: videoContainerWidth}}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                opacity: playerControlOpaciy,
              }}>
              <PlayerControls title={video.title} onPress={slideUp} />
            </Animated.View>
            <AnimatedVideo
              // source={video.video}
              style={{
                width: videoWidth,
                height: videoHeight,
                backgroundColor: 'red',
              }}
              // resizeMode={Video.RESIZE_MODE_COVER}
              // shouldPlay
            />
          </Animated.View>
          <Animated.View
            style={{
              backgroundColor: 'white',
              width: videoContainerWidth,
              height: containerHeight,
            }}>
            <Animated.View style={{opacity}}>
              <VideoContent {...{video}} />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  //   body: {
  //     height: Dimensions.get('window').height,
  //   },
  body: {
    // ...StyleSheet.absoluteFillObject,
    // height: 500,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default memo(VideoModal);

import React, {memo, useEffect} from 'react';
import {View, Dimensions, StyleSheet, StatusBar} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  add,
  useEvent,
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
  useAnimatedStyle,
  interpolateNode,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

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
  // interpolated valiues
  const animatedWidth = useSharedValue(width); // INTERPOLATED VALUES ARE HERE AND NOT IN  useAnimatedStyle

  const angle = useSharedValue(0);
  // const velocityY = useSharedValue(0);
  // const offsetY = useSharedValue(0);
  const offsetY2 = useSharedValue(0);

  // const translateY = useSharedValue(0);

  // const gestureState = useSharedValue(State.UNDETERMINED);

  // const x = useSharedValue(0);
  // const gestureHandler = useAnimatedGestureHandler({
  //   onStart: (_, ctx) => {
  //     console.log('onGestureEvent');
  //     ctx.translationY = translationY.value;
  //   },
  //   onActive: (event, ctx) => {
  //     console.log('onActive');
  //     translationY.value = event.translationY;

  //     animatedWidth.value = interpolate(
  //       translationY?.value || 0,
  //       [0, midBound],
  //       [0, midBound],
  //       {
  //         extrapolateLeft: Extrapolate.CLAMP,
  //       },
  //     );
  //   },
  //   onEnd: _ => {
  //     console.log('onEnd');
  //     translationY.value = withSpring(0);
  //   },
  // });

  const uas = useAnimatedStyle(() => {
    const translateY = interpolate(
      translationY?.value || 0,
      [0, midBound],
      [0, midBound],
      {
        extrapolateLeft: Extrapolate.CLAMP,
      },
    );
    return {
      transform: [{translateY}],
    };
  });

  const videoWidthAnimatedStyle = useAnimatedStyle(() => {
    const videoWidth = interpolate(
      translationY.value,
      [0, midBound, upperBound],
      [width, width - 16, PLACEHOLDER_WIDTH],
    );

    return {
      width: videoWidth,
    };
  });

  const videoHeightStyle = useAnimatedStyle(() => {
    const videoHeight = interpolate(
      translationY.value,
      [0, midBound, upperBound],
      [width / 1.78, minHeight * 1.3, minHeight],
    );
    console.log('videoHeight', videoHeight);
    return {
      // height: width / 1.78,
      height: videoHeight,
    };
  });

  const videoContainerWidth = useAnimatedStyle(() => {
    console.log('translateY');

    // const containerWidth = interpolate(
    //   translationY?.value || 0,
    //   [0, midBound],
    //   [width, width - 16],
    //   {
    //     extrapolateLeft: Extrapolate.CLAMP,
    //   },
    // );
    return {
      width: width,
    };
  });

  // const videoContainerWidth = interpolate(translateY, {
  //   inputRange: [0, midBound],
  //   outputRange: [width, width - 16],
  //   extrapolate: Extrapolate.CLAMP,
  // });

  const playerControlOpaciyStyle = useAnimatedStyle(() => {
    const playerControlOpaciy = interpolate(
      translationY.value,
      [midBound, upperBound],
      [0, 1],
      {extrapolateLeft: Extrapolate.CLAMP},
    );
    return {
      opacity: playerControlOpaciy,
      // opacity: translationY.value,
    };
  });

  // const statusBarOpacityStyle = useAnimatedStyle(() => {
  //   // const statusBarOpacity = interpolate(
  //   //   translationY.value,
  //   //   [0, statusBarHeight],
  //   //   [1, 0],
  //   //   {extrapolateLeft: Extrapolate.CLAMP},
  //   // );
  //   return {
  //     opacity: translationY.value,
  //   };
  // });

  // const opacityStyle = useAnimatedStyle(() => {
  //   // const opacity = interpolate(
  //   //   translationY.value,
  //   //   [0, midBound - 100],
  //   //   [1, 0],
  //   //   {
  //   //     extrapolateLeft: Extrapolate.CLAMP,
  //   //   },
  //   // );
  //   return {
  //     opacity: translationY.value,
  //   };
  // });

  const containerHeightStyle = useAnimatedStyle(() => {
    // const containerHeight = interpolate(
    //   translationY.value,
    //   [0, midBound],
    //   [height, 0],
    //   {extrapolateLeft: Extrapolate.CLAMP},
    // );
    return {
      height: height,
    };
  });

  // console.log('containerHeightStyle', containerHeightStyle);

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

  // const {onGestureEvent, translateY: y, offsetY2} = this;
  // const translateY = add(y.value, offsetY2.value);
  const {video} = props;

  const pan = Gesture.Pan()
    .minDistance(0)
    .onChange(event => {
      'worklet';
      // offset.value = interpolate(
      //   event.translationX,
      //   [-100, -50, 0, 50, 100],
      //   [-30, -10, 0, 10, 30]
      // );
      translationY.value = event.translationY;

      // animatedWidth.value = interpolate(
      //   translationY?.value || 0,
      //   [0, midBound],
      //   [0, midBound],
      //   {
      //     extrapolateLeft: Extrapolate.CLAMP,
      //   },
      // );
    })
    .onFinalize(() => {
      translationY.value = withSpring(0);
      // offset.value = withSpring(0, { mass: 2, stiffness: 500 });
    });

  return (
    // TODO (mikle): find why it doesnt work ALL THE TIME
    <GestureHandlerRootView style={styles.container}>
      <Animated.View
        style={[
          // statusBarOpacityStyle,
          {
            height: StatusBar.currentHeight,
            backgroundColor: 'black',
          },
        ]}
      />
      <GestureDetector gesture={pan}>
        <Animated.View style={[uas, shadow]}>
          <Animated.View
            style={[
              videoContainerWidth,
              videoHeightStyle,
              {backgroundColor: 'white', minHeight: 100},
            ]}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                ...playerControlOpaciyStyle,
              }}>
              <PlayerControls title={video.title} onPress={slideUp} />
            </Animated.View>
            <AnimatedVideo
              // source={video.video}
              style={[
                videoWidthAnimatedStyle,

                {
                  backgroundColor: 'red',
                  flex: 1,
                },
              ]}
              // resizeMode={Video.RESIZE_MODE_COVER}
              // shouldPlay
            />
          </Animated.View>
          <Animated.View
            style={[
              videoContainerWidth,
              containerHeightStyle,
              {
                backgroundColor: 'white',
              },
            ]}>
            <Animated.View
              style={
                [
                  // opacityStyle
                ]
              }>
              <VideoContent {...{video}} />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth: 1,
  },
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

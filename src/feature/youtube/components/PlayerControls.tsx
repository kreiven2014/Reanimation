import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
// import {Icon} from 'expo';
import PlayerContext from '../PlayerContext';

const {width} = Dimensions.get('window');
export const PLACEHOLDER_WIDTH = width / 3;

type PlayerControlsProps = {
  title: string;
  onPress: () => void;
};

// export default class PlayerControls extends React.PureComponent<PlayerControlsProps> {
const PlayerControls = props => {
  const {setVideo} = React.useContext(PlayerContext);
  const {title, onPress} = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.placeholder} />
        <Text style={styles.title} numberOfLines={3}>
          {title}
        </Text>
        {/* <Icon.Feather style={styles.icon} name="play" /> */}
        <TouchableWithoutFeedback onPress={() => setVideo(null)}>
          {/* <Icon.Feather style={styles.icon} name="x" /> */}
          <Text> X </Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlayerControls;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 8,
  },
  placeholder: {
    width: PLACEHOLDER_WIDTH,
  },
  icon: {
    fontSize: 24,
    color: 'gray',
    padding: 8,
  },
});

import {StyleSheet} from 'react-native';

import constants from '../../config/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
  },
  backgroundImage: {
    width: '100%',
    height: constants.WINDOW_HEIGHT * 0.4,
  },
  cardContainer: {
    marginTop: (-constants.WINDOW_HEIGHT * 0.3) / 2,
  },
});

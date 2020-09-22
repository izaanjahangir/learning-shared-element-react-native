import {StyleSheet} from 'react-native';

import constants from '../../config/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 100,
    height: 100,
  },
  itemContainer: {
    width: '100%',
  },
  backgroundImage: {
    width: constants.WINDOW_WIDTH,
    height: '100%',
    paddingHorizontal: constants.SPACING_MEDIUM,
    justifyContent: 'flex-end',
  },
});

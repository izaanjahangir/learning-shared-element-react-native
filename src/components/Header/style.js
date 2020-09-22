import {StyleSheet} from 'react-native';

import constants from '../../config/constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    minHeight: constants.WINDOW_HEIGHT * 0.09,
    justifyContent: 'center',
    paddingHorizontal: constants.SPACING_SMALL,
    width: '100%',
  },
  backArrow: {
    width: 40,
    height: 40,
  },
});

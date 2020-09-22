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
  cardContainer: {
    width: constants.WINDOW_WIDTH,
    height: '100%',
    justifyContent: 'flex-end',
  },
  innerCardContainer: {
    paddingHorizontal: constants.SPACING_MEDIUM,
  },
  imageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
});

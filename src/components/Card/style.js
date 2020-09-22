import {StyleSheet} from 'react-native';

import constants from '../../config/constants';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    width: constants.WINDOW_WIDTH,
    height: '100%',
    paddingHorizontal: constants.SPACING_MEDIUM,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    minHeight: constants.WINDOW_HEIGHT * 0.3,
    backgroundColor: colors.WHITE,
    marginBottom: constants.SPACING_MEDIUM * 2,
    paddingHorizontal: constants.SPACING_MEDIUM,
    paddingVertical: constants.SPACING_MEDIUM * 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profile: {
    width: constants.WINDOW_WIDTH * 0.2,
    height: constants.WINDOW_WIDTH * 0.2,
    borderRadius: (constants.WINDOW_WIDTH * 0.2) / 2,
  },
  name: {
    marginLeft: constants.SPACING_MEDIUM,
    fontSize: constants.FONT_MEDIUM,
  },
  insightContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  insightChild: {
    flex: 1,
  },
  insightAmount: {
    fontSize: constants.FONT_MEDIUM,
    fontWeight: '400',
    textAlign: 'center',
  },
  insightName: {
    fontSize: constants.FONT_SMALL,
    color: colors.GREY,
    textAlign: 'center',
  },
});

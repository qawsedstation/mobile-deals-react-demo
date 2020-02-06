import gstyles from 'constants/styles.js';
import colors from 'constants/colors.js';
import media from 'constants/media.js';

export default {

  base: {

  },

  mainContent: {},

  flexContainer: {
    ...gstyles.flexContainer,
  },

  filterBox: {
    ...gstyles.flexColumn,
    flex: '0 1 20%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  dealBox: {
    ...gstyles.flexColumn,
    flex: '0 1 80%',
    paddingLeft: 30,
    paddingRight: 30,
  }
};

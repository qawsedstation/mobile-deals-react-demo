import media from 'constants/media.js';

export default {

  device: {

  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    [media.TABLET]: {
      flexDirection: 'column',
    },
  },
  flexColumn: {
    flex: '0 1 50%',
    textAlign: 'left',
    [media.TABLET]: {
      flex: '0 1 auto',
      paddingRight: 5,
      paddingLeft: 5,
      textAlign: 'center',
    },
  },
  fonts: {

  },

};

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'redux/modules';

import DealsViewerUI from 'components/modules/MobileDeals/DealsViewer';

const DealsViewerContainer = (props) => {
  return <DealsViewerUI {...props} />;
};


export default connect(
  state => {
    return {
      ...(state.get('DealsFilter').toJS()),
      ...(state.get('DealsProductNameFilter').toJS()),
    };
  },
  dispatch => bindActionCreators({
    ...actionCreators.DealsViewer,
  }, dispatch),
)(DealsViewerContainer);

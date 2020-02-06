import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'redux/modules';

import DealsProductNameFilterUI from 'components/modules/MobileDeals/DealsProductNameFilter';

const DealsProductNameFilterContainer = (props) => {
  return <DealsProductNameFilterUI {...props} />;
};

export default connect(
  state => {
    return {
      ...(state.get('DealsProductNameFilter').toJS()),
    };
  },
  dispatch => bindActionCreators({
    ...actionCreators.DealsProductNameFilter,
  }, dispatch),
)(DealsProductNameFilterContainer);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'redux/modules';

import DealsFilterUI from 'components/modules/MobileDeals/DealsFilter';

const DealsFilterContainer = (props) => {
  return <DealsFilterUI {...props} />;
};


export default connect(
  state => {
    return {
      ...(state.get('DealsFilter').toJS()),
    };
  },
  dispatch => bindActionCreators({
    ...actionCreators.DealsFilter,
  }, dispatch),
)(DealsFilterContainer);

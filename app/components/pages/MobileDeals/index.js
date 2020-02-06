/* eslint-disable max-len */
import React from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';

import styles from './styles';
import AppBar from 'material-ui/AppBar';

import DealsViewerContainer from 'redux/modules/MobileDeals/DealsViewer/container';
import DealsFilterContainer from 'redux/modules/MobileDeals/DealsFilter/container';
import DealsProductNameFilterContainer from 'redux/modules/MobileDeals/DealsProductNameFilter/container';

/**
* @class MobileDeals
*/
class MobileDeals extends React.Component {


  render() {

    return (
			<div style={styles.base}>
				<Helmet title="Demo Page" />
				<AppBar
				title="Mobile Deals Demo"
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
				<div style={styles.flexContainer}>
					<div style={styles.filterBox}>
						<DealsFilterContainer />
					</div>
					<div style={styles.dealBox}>
						<DealsProductNameFilterContainer />
						<DealsViewerContainer />
				</div>
				</div>
			</div>
		);
  }
}


export default Radium(MobileDeals);

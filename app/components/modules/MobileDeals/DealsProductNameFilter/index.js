import React from 'react';
import Radium from 'radium';

import styles from './styles';
import TextField from 'material-ui/TextField';

/**
* @class DealsProductNameFilterUI
* @prop {callback} dealsProductNameFilter Request to Filter by Name
*/
class DealsProductNameFilterUI extends React.Component {

  onTextFieldChange(event, value) {
    this.props.dealsProductNameFilter(value);
  }

  render() {

    const { dealsProductNameFilter } = this.props;

    return (
				<div style={styles.base}>
					<TextField
						onChange={this.onTextFieldChange.bind(this)}
						floatingLabelText="Filter by Product Name"
					/>
				</div>
			);
  }
}

export default DealsProductNameFilterUI;

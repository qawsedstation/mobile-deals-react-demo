import React from 'react';
import Radium from 'radium';

import styles from './styles';

/**
 * @class Class
 * @prop {type} name description
 */
class NewComponent extends React.Component {

	static defaultProps = {
		name: 'default name',
	}

	render() {

		const {
		  name,
		} = this.props;

		return (
		  <div style={styles.base}>
		    <h3>New React Component: {name}</h3>
		  </div>
		);
	}
}
NewComponent.propTypes = {
	name: React.PropTypes.string,
};
export default NewComponent;
// export default Radium(NewComponent);

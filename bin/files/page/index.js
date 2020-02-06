import React from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';

import styles from './styles';


/**
 * @class PageComponent
 */
class PageComponent extends React.Component {

  static defaultProps = {
    name: 'default name'
  }

  render() {
    //
    const {
      name,
    } = this.props;

    return (
      <div style={styles.base}>
        <Header {...this.props} />

        <Helmet
          title="Page title..."
        />


      </div>
    );
  }
}
PageComponent.propTypes = {
  // name: React.PropTypes.string,
};
export default PageComponent;
// export default Radium(PageComponent);

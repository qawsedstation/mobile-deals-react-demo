import React, { Component, PropTypes } from 'react';

import { StyleRoot } from 'radium';

import DevTools from 'components/modules/dev/DevTools';


import HelmetCommon from './helmet.common';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from 'constants/muiTheme';

class RootDev extends Component {

  render() {
    return (
      <StyleRoot>
        <HelmetCommon />
        <MuiThemeProvider muiTheme={muiTheme}>
          {this.props.children}
        </MuiThemeProvider>
        <DevTools />
      </StyleRoot>
    );
  }

}

export default RootDev;

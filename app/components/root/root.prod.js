import React, { Component, PropTypes } from 'react';

import { StyleRoot } from 'radium';

import HelmetCommon from './helmet.common';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from 'constants/muiTheme';

class RootProd extends Component {

  render() {
    return (
      <StyleRoot>
        <HelmetCommon />
        <MuiThemeProvider muiTheme={muiTheme}>
          {this.props.children}
        </MuiThemeProvider>

      </StyleRoot>
    );
  }
}

export default RootProd;

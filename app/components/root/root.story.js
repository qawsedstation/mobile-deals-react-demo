import 'babel-polyfill';

import React from 'react';


import Immutable from 'immutable';
import { Provider } from 'react-redux';
import configureStore from 'redux/store/configureStore';

const initialState = Immutable.Map();
export const store = configureStore(initialState);


import { StyleRoot } from 'radium';
import HelmetCommon from './helmet.common';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from 'constants/muiTheme';

class RootStory extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <StyleRoot>
          <HelmetCommon />
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.props.children}
          </MuiThemeProvider>
        </StyleRoot>
      </Provider>
    );
  }
}

export default RootStory;

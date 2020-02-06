import { shallow, mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();

export const shallowWithContext = (node) => shallow(node, { context: { muiTheme } });
export const mountWithContext = (node) => mount(node, {
  context: { muiTheme },
  childContextTypes: { muiTheme: getMuiTheme },
});

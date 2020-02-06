
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Colors from 'constants/colors.js';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.primary.megenta,
    primary2Color: Colors.primary.megenta,
    accent1Color: Colors.primary.megenta,
  },
  appBar: {
    height: 70,
  },
});
export default muiTheme;

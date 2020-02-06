import React from 'react';
import Radium from 'radium';

import styles from './styles';
import Slider from 'material-ui/Slider';

/**
* @class DealsFilterUI
* @prop {callback} getMobileDealsRequest Sends an action for get the mobile deals
*/
class DealsFilterUI extends React.Component {


  static defaultProps = {
    minutesFilter: 500,
    textsFilter: 5000,
    dataFilter: 1024,
  }


  componentDidMount() {
    this.updateResults();
  }
  setUpMinutes(event, minutes) {
    this.props.setMinutesFilter(minutes);
    this.updateResults();
  }

  setUpTexts(event, texts) {
    this.props.setTextsFilter(texts);
    this.updateResults();
  }

  setUpData(event, data) {
    this.props.setDataFilter(data);
    this.updateResults();
  }

  updateResults() {
    this.props.getMobileDealsRequest(
      this.props.minutesFilter, this.props.textsFilter, this.props.dataFilter
    );
  }

  render() {

    const { minutesFilter, textsFilter, dataFilter } = this.props;

    return (
						<div style={styles.base}>
							<p style={styles.caption}>Mins</p>
							<p id="mins" style={styles.value}>{this.props.minutesFilter}</p>
							<Slider
								style={styles.slider}
								onChange={this.setUpMinutes.bind(this)}
								step={50}
								defaultValue={250}
								max={2000}
								min={0}
							/>
							<p style={styles.caption}>Texts</p>
							<p id="texts" style={styles.value}>{this.props.textsFilter}</p>
							<Slider
								style={styles.slider}
								onChange={this.setUpTexts.bind(this)}
								step={50}
								defaultValue={250}
								max={5000}
								min={0}
							/>
							<p style={styles.caption}>Data (in MB)</p>
							<p id="data" style={styles.value}>{this.props.dataFilter}</p>
							<Slider
								style={styles.slider}
								onChange={this.setUpData.bind(this)}
								step={50}
								defaultValue={250}
								max={20000}
								min={0}
							/>
						</div>
					);
  }
}

export default DealsFilterUI;

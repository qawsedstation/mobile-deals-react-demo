/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */

import React from 'react';
import Radium from 'radium';
import {
Table,
TableBody,
TableHeader,
TableHeaderColumn,
TableRow,
TableRowColumn,
} from 'material-ui/Table';

import styles from './styles';

/**
* @class DealsViewerUI
* @prop {array} deals The provided deals array
* @prop {string} dealsProductName The provided filter for product name
*/
class DealsViewerUI extends React.Component {

  static defaultProps = {
    deals: [],
    dealsProductName: '',
  }

  /**
  * Filters the deals acording to the product name filter provided
  **/
  getFilteredDeals = (deals, dealsProductName) =>
    (deals.filter((deal) => {
      return deal.plan_name.toLowerCase().indexOf(dealsProductName.toLowerCase()) !== -1;
    }));

  render() {

    const { deals, dealsProductName } = this.props;

    const filteredDeals = this.getFilteredDeals(deals, dealsProductName);

    return (
		<div style={styles.base}>
			<Table selectable={false}>
				<TableHeader
					displaySelectAll={false}
					adjustForCheckbox={false}
    >
					<TableRow>
						<TableHeaderColumn>Deal</TableHeaderColumn>
						<TableHeaderColumn>Mins</TableHeaderColumn>
						<TableHeaderColumn>Texts</TableHeaderColumn>
						<TableHeaderColumn>Data</TableHeaderColumn>
						<TableHeaderColumn>Monthly</TableHeaderColumn>
						<TableHeaderColumn>Total</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false}>
					{filteredDeals.map((deal, key) => (
						<TableRow key={key}>
							<TableRowColumn>
								{deal.plan_name}
							</TableRowColumn>
							<TableRowColumn>
								{(deal.tariff_minutes !== -1) ? deal.tariff_minutes : 'Unlimited'}
								</TableRowColumn>
								<TableRowColumn>
									{(deal.tariff_texts !== -1) ? deal.tariff_texts : 'Unlimited'}
									</TableRowColumn>
									<TableRowColumn>
										{(deal.tariff_data !== -1) ? deal.tariff_data	: 'Unlimited'}
										</TableRowColumn>
										<TableRowColumn>
											£{deal.total_monthly}
										</TableRowColumn>
										<TableRowColumn>
											£{deal.total_contract_cost}
										</TableRowColumn>
									</TableRow>
								))}
				</TableBody>
			</Table>
		</div>
);
  }
}

DealsViewerUI.propTypes = {};

export default DealsViewerUI;

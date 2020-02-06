import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from 'components/root';

import MobileDeals from 'pages/MobileDeals';

export default(
	<Route path="/" component={Root}>
		<IndexRoute component={MobileDeals} />
	</Route>
);

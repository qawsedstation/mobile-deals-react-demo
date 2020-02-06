import axios from 'axios';

import {
API_URL
} from 'app/config';

export default function (minutes, texts, data) {
  let url = `${API_URL}/dealengine/v2/deals/product/paym?
	clickAndCollect=false&contractLength=&data=${data}
	&dedup=true&includeRefurbished=true&includeResellers=true&limit=10&mins=${minutes}
	&only4g=false&page=1&sortOrder=asc&sortProperty=averaged_monthly&texts=${texts}`;

  const inst = axios.create();
  const config = {
    url,
    method: 'get',
    headers: {
      ['Content-Type']: 'application/json',
    },
    transformRequest: (res) => {
      return JSON.stringify(res);
    },
  };
  return inst.request(config);
}

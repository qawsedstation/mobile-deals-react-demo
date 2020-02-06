import {
DEALS_PRODUCT_NAME_FILTER,
} from './constants';


export const dealsProductNameFilter = (dealsProductName) => ({
  type: DEALS_PRODUCT_NAME_FILTER,
  dealsProductName,
});

import {
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
  PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW,
  PRODUCT_SORT_TYPE_NAME_ASC,
  PRODUCT_SORT_TYPE_NAME_DESC,
} from './constants';

export const sortItemsByType = (products: Product[], type: number) => {
  switch (type) {
    case PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH:
      return products.sort((a, b) => a.price - b.price);
    case PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW:
      return products.sort((a, b) => b.price - a.price);
    case PRODUCT_SORT_TYPE_NAME_ASC:
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case PRODUCT_SORT_TYPE_NAME_DESC:
      return products.sort((a, b) => b.name.localeCompare(a.name));
  }
};

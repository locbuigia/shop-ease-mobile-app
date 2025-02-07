import {createSlice} from '@reduxjs/toolkit';
import {
  BAG_TYPE_ALL,
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
  PRODUCT_LIST,
} from '../constants';

const minPrice = PRODUCT_LIST.reduce((min, current) =>
  current.price < min.price ? current : min,
).price;

const maxPrice = PRODUCT_LIST.reduce((max, current) =>
  current.price > max.price ? current : max,
).price;

const initialState = {
  products: PRODUCT_LIST,
  isLoading: false,
  selectedSortType: PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
  selectedProductType: BAG_TYPE_ALL,
  currentMinPrice: 0,
  currentMaxPrice: 0,
  minPriceRange: minPrice,
  maxPriceRange: maxPrice,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedProductType: (state, action) => {
      state.selectedProductType = action.payload;
    },
    setSelectedSortType: (state, action) => {
      state.selectedSortType = action.payload;
    },
    setCurrentMinPrice: (state, action) => {
      state.currentMinPrice = action.payload;
    },
    setCurrentMaxPrice: (state, action) => {
      state.currentMaxPrice = action.payload;
    },
    setMinPriceRange: (state, action) => {
      state.minPriceRange = action.payload;
    },
    setMaxPriceRange: (state, action) => {
      state.maxPriceRange = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setSelectedProductType,
  setSelectedSortType,
  setCurrentMinPrice,
  setCurrentMaxPrice,
  setMinPriceRange,
  setMaxPriceRange,
  setProducts,
} = appSlice.actions;

export default appSlice.reducer;

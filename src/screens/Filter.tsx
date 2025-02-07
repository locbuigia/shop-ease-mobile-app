import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import RangeSlider from 'rn-range-slider';
import Thumb from '../components/Slider/Thumb';
import Rail from '../components/Slider/Rail';
import RailSelected from '../components/Slider/RailSelected';
import Notch from '../components/Slider/Notch';
import {
  setCurrentMaxPrice,
  setCurrentMinPrice,
  setMaxPriceRange,
  setMinPriceRange,
  setProducts,
  setSelectedProductType,
} from '../features/appSlice';

import {
  BAG_TYPE_ALL,
  BAG_TYPE_BACKPACK,
  BAG_TYPE_DUFFLE,
  BAG_TYPE_TRAVEL,
  COLORS,
  PRODUCT_LIST,
} from '../constants';
import {sortItemsByType} from '../utils';

const Filter = ({navigation}: any) => {
  const dispatch = useDispatch();
  const selectedProductType = useSelector(
    (state: AppState) => state.app.selectedProductType,
  );
  const selectedSortType = useSelector(
    (state: AppState) => state.app.selectedSortType,
  );
  const minPriceRange = useSelector(
    (state: AppState) => state.app.minPriceRange,
  );
  const maxPriceRange = useSelector(
    (state: AppState) => state.app.maxPriceRange,
  );
  const currentMinPrice = useSelector(
    (state: AppState) => state.app.currentMinPrice,
  );
  const currentMaxPrice = useSelector(
    (state: AppState) => state.app.currentMaxPrice,
  );

  const [minPrice, setMinPrice] = useState(currentMinPrice);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low: number, high: number) => {
    setMinPrice(low);
    setMaxPrice(high);
  }, []);

  const handleSliderTouchEnd = () => {
    dispatch(setCurrentMinPrice(minPrice));
    dispatch(setCurrentMaxPrice(maxPrice));
    dispatch(
      setProducts(
        PRODUCT_LIST.filter(
          item => item.price >= minPrice && item.price <= maxPrice,
        ),
      ),
    );
  };

  const handleSelectType = (type: string) => {
    dispatch(setSelectedProductType(type));

    let itemsByType =
      type === BAG_TYPE_ALL
        ? [...PRODUCT_LIST]
        : PRODUCT_LIST.filter(item => item.type === type);

    let minPriceByType = itemsByType.reduce((min, current) =>
      current.price < min.price ? current : min,
    ).price;

    let maxPriceByType = itemsByType.reduce((max, current) =>
      current.price > max.price ? current : max,
    ).price;

    dispatch(setMinPriceRange(minPriceByType));
    dispatch(setMaxPriceRange(maxPriceByType));
    dispatch(setCurrentMinPrice(minPriceByType));
    dispatch(setCurrentMaxPrice(maxPriceByType));
    setMinPrice(minPriceByType);
    setMaxPrice(maxPriceByType);
    dispatch(setProducts(sortItemsByType(itemsByType, selectedSortType)));
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} showGoBack={true} title={'Filter'} />
      <ScrollView style={styles.contentView}>
        <View style={styles.sliderView}>
          <Text style={styles.sectionLabelText}>Price Range</Text>
          <RangeSlider
            min={minPriceRange}
            max={maxPriceRange}
            low={minPrice}
            high={maxPrice}
            step={1}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
            onSliderTouchEnd={handleSliderTouchEnd}
          />
          <View style={styles.priceLabelView}>
            <Text style={styles.priceLabelText}>${minPrice}</Text>
            <Text style={styles.priceLabelText}>${maxPrice}</Text>
          </View>
        </View>
        <View style={styles.categoryView}>
          <Text style={styles.sectionLabelText}>Category</Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 0.47}}>
              <TouchableOpacity
                onPress={() => handleSelectType(BAG_TYPE_ALL)}
                style={[
                  selectedProductType === BAG_TYPE_ALL
                    ? styles.activeTypeButton
                    : styles.inactiveTypeButton,
                ]}>
                <Text
                  style={[
                    selectedProductType === BAG_TYPE_ALL
                      ? styles.activeButtonText
                      : styles.inactiveButtonText,
                  ]}>
                  All Products
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectType(BAG_TYPE_BACKPACK)}
                style={[
                  selectedProductType === BAG_TYPE_BACKPACK
                    ? styles.activeTypeButton
                    : styles.inactiveTypeButton,
                ]}>
                <Text
                  style={[
                    selectedProductType === BAG_TYPE_BACKPACK
                      ? styles.activeButtonText
                      : styles.inactiveButtonText,
                  ]}>
                  Backpacks
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.47}}>
              <TouchableOpacity
                onPress={() => handleSelectType(BAG_TYPE_DUFFLE)}
                style={[
                  selectedProductType === BAG_TYPE_DUFFLE
                    ? styles.activeTypeButton
                    : styles.inactiveTypeButton,
                ]}>
                <Text
                  style={[
                    selectedProductType === BAG_TYPE_DUFFLE
                      ? styles.activeButtonText
                      : styles.inactiveButtonText,
                  ]}>
                  Duffle Bags
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectType(BAG_TYPE_TRAVEL)}
                style={[
                  selectedProductType === BAG_TYPE_TRAVEL
                    ? styles.activeTypeButton
                    : styles.inactiveTypeButton,
                ]}>
                <Text
                  style={[
                    selectedProductType === BAG_TYPE_TRAVEL
                      ? styles.activeButtonText
                      : styles.inactiveButtonText,
                  ]}>
                  Travel Bags
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentView: {
    paddingHorizontal: 30,
  },
  sliderView: {
    justifyContent: 'center',
    marginTop: 10,
  },
  categoryView: {
    marginTop: 60,
    justifyContent: 'center',
  },
  priceLabelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  priceLabelText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 18,
  },
  sectionLabelText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  inactiveTypeButton: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  activeTypeButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  inactiveButtonText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  activeButtonText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Filter;

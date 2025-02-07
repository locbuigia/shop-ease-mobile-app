import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ProductItem from './ProductItem';
import {useDispatch} from 'react-redux';
import {
  BAG_TYPE_ALL,
  PRODUCT_LIST,
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
} from '../constants';
import {
  setCurrentMaxPrice,
  setCurrentMinPrice,
  setMaxPriceRange,
  setMinPriceRange,
  setProducts,
  setSelectedProductType,
  setSelectedSortType,
} from '../features/appSlice';

interface Props {
  label: string;
  products: Product[];
  navigation: any;
  showViewAll?: boolean;
}

interface ProductItem {
  item: Product;
}

const Collection = ({
  label,
  products,
  navigation,
  showViewAll = true,
}: Props) => {
  const dispatch = useDispatch();

  const handleNavigateToShopScreen = () => {
    dispatch(setSelectedProductType(BAG_TYPE_ALL));
    dispatch(setSelectedSortType(PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH));
    let minPriceByType = PRODUCT_LIST.reduce((min, current) =>
      current.price < min.price ? current : min,
    ).price;

    let maxPriceByType = PRODUCT_LIST.reduce((max, current) =>
      current.price > max.price ? current : max,
    ).price;
    dispatch(setMinPriceRange(minPriceByType));
    dispatch(setMaxPriceRange(maxPriceByType));
    dispatch(setCurrentMinPrice(minPriceByType));
    dispatch(setCurrentMaxPrice(maxPriceByType));
    dispatch(setProducts(PRODUCT_LIST));
    navigation.navigate('ShopScreen');
  };

  const handleNavigate = (item: Product) => {
    navigation.navigate('ProductDetails', {item});
  };

  const renderItem = useCallback(
    ({item}: ProductItem) => (
      <Pressable onPress={() => handleNavigate(item)}>
        <ProductItem product={item} />
      </Pressable>
    ),
    [],
  );

  return (
    <View style={styles.flatListContainer}>
      <View style={styles.flatListLabelView}>
        <Text style={styles.labelText}>{label}</Text>
        {showViewAll && (
          <TouchableOpacity onPress={() => handleNavigateToShopScreen()}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    marginTop: -10,
    fontFamily: 'DancingScript-Bold',
    fontSize: 36,
    color: 'white',
  },
  flatListContainer: {
    height: 350,
  },
  viewAllText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
  },
  flatListLabelView: {
    marginVertical: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Collection;

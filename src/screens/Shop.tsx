import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {
  PRODUCT_SORT_TYPE_NAME_ASC,
  PRODUCT_SORT_TYPE_NAME_DESC,
  PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW,
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
} from '../constants';
import {setProducts, setSelectedSortType} from '../features/appSlice';
import {sortItemsByType} from '../utils';

interface ProductItem {
  item: Product;
}

interface SortSelection {
  label: string;
  value: number;
}

const sortOptions = [
  {label: 'Price (Low to High)', value: PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH},
  {label: 'Price (High to Low)', value: PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW},
  {label: 'Name (A to Z)', value: PRODUCT_SORT_TYPE_NAME_ASC},
  {label: 'Name (Z to A)', value: PRODUCT_SORT_TYPE_NAME_DESC},
];

const Shop = ({navigation}: any) => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.app.products);
  const sortType = useSelector((state: AppState) => state.app.selectedSortType);
  const [value, setValue] = useState(sortType);

  const handleSortSelect = (item: SortSelection) => {
    setValue(item.value);
    const items = [...products];
    dispatch(setSelectedSortType(item.value));
    dispatch(setProducts(sortItemsByType(items, item.value)));
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
    <View style={styles.container}>
      <Header showGoBack={true} title={'Products'} navigation={navigation} />
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.filterActionView}
          onPress={() => navigation.navigate('FilterScreen')}>
          <Ionicons name="filter-outline" color={'white'} size={20} />
          <Text style={styles.actionText}>Filters</Text>
        </TouchableOpacity>
        <View style={styles.sortActionView}>
          <Ionicons name="swap-vertical-outline" color={'white'} size={20} />
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.dropdownIcon}
            data={sortOptions}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={value}
            onChange={item => {
              handleSortSelect(item);
            }}
          />
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyListView}>
            <Text style={styles.emptyListText}>No Products Found!</Text>
          </View>
        )}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    height: '100%',
  },
  actionContainer: {
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterActionView: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortActionView: {
    flex: 0.6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionText: {
    marginLeft: 8,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  dropdown: {
    width: '70%',
    height: 50,
    marginLeft: 8,
    color: 'white',
  },
  dropdownIcon: {
    display: 'none',
  },
  selectedTextStyle: {
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
  },
  emptyListView: {
    width: '100%',
    marginTop: 20,
  },
  emptyListText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Relugar',
    fontSize: 18,
    color: 'white',
  },
});

export default Shop;

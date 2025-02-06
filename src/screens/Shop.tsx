import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import Header from '../components/Header';

import ProductItem from '../components/ProductItem';
import {PRODUCT_LIST} from '../data/constants';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';

interface ProductItem {
  item: Product;
}

interface SortSelection {
  label: string;
  value: number;
}

const sortOptions = [
  {label: 'Price (Low to High)', value: 1},
  {label: 'Price (High to Low)', value: 2},
  {label: 'Name (A to Z)', value: 3},
  {label: 'Name (Z to Z)', value: 4},
];

const Shop = ({navigation}: any) => {
  const [value, setValue] = useState(sortOptions[0].value);

  const handleSortSelect = (item: SortSelection) => {
    setValue(item.value);
    console.log(item);
  };

  const handleNavigate = () => {
    navigation.navigate('ProductDetails');
  };

  const renderItem = useCallback(
    ({item}: ProductItem) => (
      <Pressable onPress={() => handleNavigate()}>
        <ProductItem product={item} />
      </Pressable>
    ),
    [],
  );

  const renderHeaderComponent = useCallback(
    () => (
      <View style={styles.actionContainer}>
        <View style={styles.filterActionView}>
          <Ionicons name="filter-outline" color={'white'} size={20} />
          <Text style={styles.actionText}>Filters</Text>
        </View>
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
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Header showGoBack={true} title={'Products'} navigation={navigation} />
      <FlatList
        data={PRODUCT_LIST}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeaderComponent}
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
    paddingBottom: 60,
  },
  actionContainer: {
    marginTop: 10,
    marginBottom: 10,
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
});

export default Shop;

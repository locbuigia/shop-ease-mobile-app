import React, {useCallback, useState} from 'react';
import {View, StyleSheet, TextInput, FlatList, Text} from 'react-native';
import Header from '../components/Header';
import {PRODUCT_LIST} from '../constants';
import SearchProductItem from '../components/SearchProductItem';

interface ProductItem {
  item: Product;
}

const Search = ({navigation}: any) => {
  const [searchInput, setSearchInput] = useState('');
  const [foundProducts, setFoundProducts] = useState<Product[]>([]);

  const handleSearchProduct = (value: string) => {
    setSearchInput(value);
    setFoundProducts(
      PRODUCT_LIST.filter(product =>
        product.name.toLowerCase().includes(value.toLocaleLowerCase()),
      ),
    );
  };

  const renderItem = useCallback(
    ({item}: ProductItem) => (
      <SearchProductItem product={item} navigation={navigation} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Header showGoBack={false} title={'Search'} navigation={navigation} />
      <View style={styles.contentView}>
        <TextInput
          style={styles.searchInput}
          value={searchInput}
          placeholder="Seach by product name..."
          placeholderTextColor={'lightgray'}
          onChangeText={handleSearchProduct}
        />
        {searchInput.length > 0 && (
          <FlatList
            data={foundProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={() => (
              <Text style={styles.noProductFound}>No Product Found!</Text>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentView: {
    flex: 1,
  },
  searchInput: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  noProductFound: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});

export default Search;

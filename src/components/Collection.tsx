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

interface Props {
  label: string;
  products: Product[];
  navigation: any;
}

interface ProductItem {
  item: Product;
}

const Collection = ({label, products, navigation}: Props) => {
  const renderItem = useCallback(
    ({item}: ProductItem) => (
      <Pressable onPress={() => navigation.navigate('ProductDetails')}>
        <ProductItem product={item} />
      </Pressable>
    ),
    [],
  );

  return (
    <View style={styles.flatListContainer}>
      <View style={styles.flatListLabelView}>
        <Text style={styles.labelText}>{label}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ShopScreen')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
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

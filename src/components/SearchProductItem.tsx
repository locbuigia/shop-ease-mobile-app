import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ITEM_DESCRIPTION} from '../constants';

interface Props {
  product: Product;
  navigation: any;
}

const SearchProductItem = ({product, navigation}: Props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetails', {item: product})}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <View style={styles.textContent}>
        <Text style={styles.nameText}>{product.name}</Text>
        <Text style={styles.descriptionText}>
          {ITEM_DESCRIPTION.substring(0, 65)}...
        </Text>
        <Text style={styles.priceText}>${product.price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  image: {
    width: 120,
    height: 150,
    marginRight: 15,
    marginLeft: 15,
  },
  textContent: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  priceText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    marginTop: 20,
  },
  nameText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    flexWrap: 'wrap',
  },
});

export default SearchProductItem;

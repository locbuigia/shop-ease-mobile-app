import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

const ProductItem = ({product}: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  image: {},
});

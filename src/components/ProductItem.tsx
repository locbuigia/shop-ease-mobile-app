import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  product: Product;
}

const ProductItem = ({product}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <View style={styles.textContent}>
        <Text
          style={{color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular'}}>
          {product.name}
        </Text>
        <Text
          style={{color: 'white', fontSize: 14, fontFamily: 'Poppins-Light'}}>
          ${product.price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 150,
  },
  textContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductItem;

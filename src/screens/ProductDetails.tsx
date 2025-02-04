import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../components/Header';

const ProductDetails = ({route}: any) => {
  //   const {product} = route.params;
  console.log('test');
  return (
    <View style={styles.container}>
      <Header showMenu={false} showGoBack={true} title={'Product Details'} />
      <ScrollView style={styles.container}>
        {/* <Image source={{uri: product.image}} />
        <Text>{product.name}</Text>
        <Text>${product.price}</Text> */}
        <Text>Product Details page</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});

export default ProductDetails;

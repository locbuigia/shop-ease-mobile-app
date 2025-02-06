import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';

const ProductDetails = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        showGoBack={true}
        title={'Product Details'}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>This is Product Details screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default ProductDetails;

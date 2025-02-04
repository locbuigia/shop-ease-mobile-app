import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';

const ProductDetails = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Header showGoBack={false} title={'Your Cart'} />
      <ScrollView style={styles.container}>
        <Text>This is Cart screen</Text>
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

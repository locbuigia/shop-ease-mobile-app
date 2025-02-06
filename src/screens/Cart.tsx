import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';

const Cart = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Header showGoBack={false} title={'Cart'} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>This is Cart screen</Text>
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

export default Cart;

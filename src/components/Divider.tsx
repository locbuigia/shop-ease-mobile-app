import {StyleSheet, View} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: 'gray',
  },
});

export default Divider;

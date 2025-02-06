import {StyleSheet, View} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#CAD5E2',
  },
});

export default Divider;

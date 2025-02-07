import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../data/constants';

const Thumb = () => {
  return <View style={styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: 16,
    height: 16,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
});

export default memo(Thumb);

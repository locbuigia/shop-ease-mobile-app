import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Label = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{'test'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default memo(Label);

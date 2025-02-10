import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  value?: number;
  handleMinus: () => void;
  handlePlus: () => void;
}

const Stepper = ({value = 0, handlePlus, handleMinus}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMinus}>
        <Ionicons name="remove" color="white" size={24} />
      </TouchableOpacity>
      <TextInput style={styles.input} value={value?.toString() || '0'} />
      <TouchableOpacity onPress={handlePlus}>
        <Ionicons name="add" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
  },
});

export default Stepper;

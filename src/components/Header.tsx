import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({title = 'ShopEase', showGoBack = true}) => {
  return (
    <View style={styles.header}>
      {showGoBack && (
        <TouchableOpacity>
          <Ionicons
            name="chevron-back-outline"
            color="rgba(255, 255, 255, .9)"
            size={40}
            style={{backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 120,
    padding: 15,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  title: {
    marginLeft: 16,
    fontFamily: 'DancingScript-Bold',
    fontSize: 40,
  },
});

export default Header;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({title = 'ShopEase', showMenu = false, showGoBack = true}) => {
  return (
    <View style={styles.header}>
      {showGoBack && (
        <TouchableOpacity>
          <Ionicons
            testID="nextButton"
            name="chevron-back-outline"
            color="rgba(255, 255, 255, .9)"
            size={40}
            style={{backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
      )}
      {showMenu && (
        <TouchableOpacity>
          <Ionicons
            testID="nextButton"
            name="menu-outline"
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
    height: 70,
    padding: 15,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 23,
    marginLeft: 16,
  },
});

export default Header;

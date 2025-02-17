import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
import {useSelector} from 'react-redux';

interface Props {
  title: string | null;
  showGoBack: boolean;
  showCartButton?: boolean;
  navigation: any;
}

const Header = ({
  title = 'ShopEase',
  showGoBack = true,
  showCartButton = true,
  navigation,
}: Props) => {
  const itemsInUserCart = useSelector(
    (state: UserState) => state.user.itemsInUserCart,
  );

  const totalQty =
    itemsInUserCart.length > 0
      ? itemsInUserCart.reduce(
          (totalQty, item) => (totalQty += item.quantity || 0),
          0,
        )
      : 0;

  return (
    <View style={styles.header}>
      {showGoBack && (
        <TouchableOpacity
          style={styles.headerBackIcon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color="white" size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {showCartButton && (
        <TouchableOpacity
          style={styles.headerCartButton}
          onPress={() => navigation.navigate('Cart')}>
          <Ionicons name={'cart'} size={30} color={'white'} />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{totalQty}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'DancingScript-Bold',
    fontSize: 30,
  },
  headerBackIcon: {
    position: 'absolute',
    left: 20,
  },
  headerCartButton: {
    position: 'absolute',
    right: 20,
    width: 40,
  },
  cartBadge: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    width: 20,
    height: 20,
    right: 0,
    borderRadius: 50,
  },
  cartBadgeText: {
    textAlign: 'center',
  },
});

export default Header;

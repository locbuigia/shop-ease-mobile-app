import React, {useCallback} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import ProductItemInCart from '../components/ProductItemInCart';
import {pluralize} from '../utils';
import {COLORS} from '../constants';

interface ProductItem {
  item: Product;
}

const Cart = ({navigation}: any) => {
  const itemsInUserCart = useSelector(
    (state: UserState) => state.user.itemsInUserCart,
  );

  const renderItem = useCallback(
    ({item}: ProductItem) => <ProductItemInCart product={item} />,
    [],
  );

  return (
    <View style={styles.container}>
      <Header
        showGoBack={true}
        showCartButton={false}
        title={`Cart (${itemsInUserCart.length} ${pluralize(
          itemsInUserCart.length,
          'item',
          'items',
        )})`}
        navigation={navigation}
      />
      <FlatList
        data={itemsInUserCart}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Your Cart Is Empty</Text>
        )}
        renderItem={renderItem}
        style={styles.flatList}
      />
      {itemsInUserCart.length > 0 && (
        <View style={styles.checkOutView}>
          <View style={styles.subTotalView}>
            <Text style={styles.subTotalText}>Sub Total</Text>
            <Text style={styles.subTotalText}>
              $
              {itemsInUserCart
                .reduce(
                  (total, item) => total + item.price * (item.quantity || 0),
                  0,
                )
                .toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkOutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flatList: {
    marginBottom: 160,
  },
  emptyText: {
    color: 'white',
    marginTop: 40,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  checkOutView: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    bottom: 0,
    backgroundColor: 'black',
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  checkOutText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  subTotalView: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  subTotalText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Cart;

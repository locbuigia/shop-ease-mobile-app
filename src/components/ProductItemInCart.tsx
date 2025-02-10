import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Stepper from './Stepper';
import {useDispatch} from 'react-redux';
import {
  removeItemFromUserCart,
  updateItemQuantityInUserCart,
} from '../features/userSlice';

interface Props {
  product: Product;
}

const ProductItemInCart = ({product}: Props) => {
  const dispatch = useDispatch();
  const handleMinus = () => {
    if (product.quantity === 1) {
      return;
    }
    const updatedItem = {
      ...product,
      quantity: (product.quantity || 0) - 1,
    };
    dispatch(updateItemQuantityInUserCart(updatedItem));
  };

  const handlePlus = () => {
    const updatedItem = {
      ...product,
      quantity: (product.quantity || 0) + 1,
    };
    dispatch(updateItemQuantityInUserCart(updatedItem));
  };

  const handleRemoveItemFromCart = (item: Product) => {
    dispatch(removeItemFromUserCart(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
        <View style={styles.textContent}>
          <Text style={styles.nameText}>{product.name}</Text>
          <Text style={styles.priceText}>${product.price}</Text>
          <Stepper
            value={product.quantity}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
          />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <TouchableOpacity onPress={() => handleRemoveItemFromCart(product)}>
          <Ionicons name="trash" color="red" size={24} />
        </TouchableOpacity>
        <Text style={styles.totalPriceText}>
          ${(product.price * (product.quantity || 0)).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentView: {
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 150,
    marginRight: 15,
  },
  textContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  priceText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    marginBottom: 14,
  },
  qtyAndPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPriceText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 40,
  },
  rightColumn: {
    alignItems: 'center',
  },
});

export default ProductItemInCart;

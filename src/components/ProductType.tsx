import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import {BAG_TYPE_ALL, COLORS, PRODUCT_LIST} from '../data/constants';
import {useDispatch} from 'react-redux';
import {
  setCurrentMaxPrice,
  setCurrentMinPrice,
  setMaxPriceRange,
  setMinPriceRange,
  setProducts,
  setSelectedProductType,
} from '../features/appSlice';

interface Props {
  image: ImageSourcePropType;
  label: string;
  type: string;
  navigation: any;
}

const ProductType = ({image, label, type, navigation}: Props) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setSelectedProductType(type));
    let itemsByType =
      type === BAG_TYPE_ALL
        ? PRODUCT_LIST
        : PRODUCT_LIST.filter(item => item.type === type);

    let minPriceByType = itemsByType.reduce((min, current) =>
      current.price < min.price ? current : min,
    ).price;

    let maxPriceByType = itemsByType.reduce((max, current) =>
      current.price > max.price ? current : max,
    ).price;

    dispatch(setMinPriceRange(minPriceByType));
    dispatch(setMaxPriceRange(maxPriceByType));
    dispatch(setCurrentMinPrice(minPriceByType));
    dispatch(setCurrentMaxPrice(maxPriceByType));
    dispatch(
      setProducts(
        type === BAG_TYPE_ALL
          ? PRODUCT_LIST
          : PRODUCT_LIST.filter(item => item.type === type),
      ),
    );
    navigation.navigate('ShopScreen');
  };
  return (
    <Pressable style={styles.container} onPress={() => handlePress()}>
      <Image source={image} style={styles.typeImage} />
      <View style={styles.contentView}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  typeImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  contentView: {
    position: 'absolute',
    width: '100%',
    height: 400,
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: COLORS.primary,
    fontSize: 34,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ProductType;

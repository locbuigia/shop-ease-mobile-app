import React, {useEffect, useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  BAG_TYPE_ALL,
  BAG_TYPE_BACKPACK,
  BAG_TYPE_DUFFLE,
  BAG_TYPE_TRAVEL,
  COLORS,
  PRODUCT_LIST,
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
} from '../constants';
import ProductType from '../components/ProductType';
import Collection from '../components/Collection';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCurrentMaxPrice,
  setCurrentMinPrice,
  setMaxPriceRange,
  setMinPriceRange,
  setProducts,
  setSelectedProductType,
  setSelectedSortType,
} from '../features/appSlice';
import Header from '../components/Header';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();

  const newProducts = PRODUCT_LIST.filter(item => item.isNew);
  const favoriteProducts = PRODUCT_LIST.filter(item => item.isFavorite);

  const handleNavigateToShopScreen = () => {
    dispatch(setSelectedProductType(BAG_TYPE_ALL));
    dispatch(setSelectedSortType(PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH));
    let minPriceByType = PRODUCT_LIST.reduce((min, current) =>
      current.price < min.price ? current : min,
    ).price;

    let maxPriceByType = PRODUCT_LIST.reduce((max, current) =>
      current.price > max.price ? current : max,
    ).price;
    dispatch(setMinPriceRange(minPriceByType));
    dispatch(setMaxPriceRange(maxPriceByType));
    dispatch(setCurrentMinPrice(minPriceByType));
    dispatch(setCurrentMaxPrice(maxPriceByType));
    dispatch(setProducts(PRODUCT_LIST));
    navigation.navigate('ShopScreen');
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} showGoBack={false} title={'ShopEase'} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.inner}>
          <View style={styles.heroView}>
            <View style={styles.blackBackground} />
            <Image
              source={require('../assets/images/shopping-background-photo.jpg')}
              style={styles.image}
            />
            <View style={styles.bannerTextView}>
              <Text style={styles.appName}>ShopEase</Text>
              <Text style={styles.appDescription}>
                Your one-stop shop for bags and backpacks!
              </Text>
              <TouchableOpacity
                style={styles.shopNowButton}
                onPress={() => handleNavigateToShopScreen()}>
                <Text style={styles.shopNowText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Collection
            label={'New Collections'}
            products={newProducts}
            navigation={navigation}
          />
          <ProductType
            image={require('../assets/images/backpack-type.jpg')}
            label="Backpack"
            navigation={navigation}
            type={BAG_TYPE_BACKPACK}
          />
          <ProductType
            image={require('../assets/images/duffle-type.jpg')}
            label="Duffle"
            navigation={navigation}
            type={BAG_TYPE_DUFFLE}
          />
          <ProductType
            image={require('../assets/images/travel-type.jpg')}
            label="Travel"
            navigation={navigation}
            type={BAG_TYPE_TRAVEL}
          />
          <Collection
            label={'Our Favorites'}
            products={favoriteProducts}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
  },
  scrollView: {
    width: '100%',
    backgroundColor: 'black',
  },
  blackBackground: {
    zIndex: 10,
    width: '100%',
    height: 600,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  inner: {
    alignItems: 'center',
  },
  bannerTextView: {
    zIndex: 20,
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  appName: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 70,
    color: 'white',
  },
  appDescription: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: 'white',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
  },
  shopNowButton: {
    width: 170,
    marginTop: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
  },
  shopNowText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'white',
  },
  heroView: {
    width: '100%',
  },
});

export default Home;

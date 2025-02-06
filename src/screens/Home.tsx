import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {PRODUCT_LIST} from '../data/constants';
import ProductType from '../components/ProductType';
import Collection from '../components/Collection';

const Home = ({navigation}: any) => {
  const newProducts = PRODUCT_LIST.filter(item => item.isNew);
  const favoriteProducts = PRODUCT_LIST.filter(item => item.isFavorite);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
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
              onPress={() => navigation.navigate('ShopScreen')}>
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
        />
        <ProductType
          image={require('../assets/images/duffle-type.jpg')}
          label="Duffle"
          navigation={navigation}
        />
        <ProductType
          image={require('../assets/images/travel-type.jpg')}
          label="Travel"
          navigation={navigation}
        />
        <Collection
          label={'Our Favorites'}
          products={favoriteProducts}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  container: {
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
    backgroundColor: '#EF3651',
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

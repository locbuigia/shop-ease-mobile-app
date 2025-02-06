import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProductItem from '../components/ProductItem';
import {PRODUCT_LIST} from '../data/constants';
import ProductType from '../components/ProductType';

interface ProductItem {
  item: Product;
}

const Home = ({navigation}: any) => {
  const newProducts = PRODUCT_LIST.filter(item => item.isNew);
  const favoriteProducts = PRODUCT_LIST.filter(item => item.isFavorite);

  const renderItem = useCallback(
    ({item}: ProductItem) => (
      <Pressable onPress={() => navigation.navigate('ProductDetails')}>
        <ProductItem product={item} />
      </Pressable>
    ),
    [],
  );

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{width: '100%'}}>
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
        <View style={styles.flatListContainer}>
          <Text style={styles.labelText}>New Collections</Text>
          <FlatList
            data={newProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            horizontal={true}
            nestedScrollEnabled={true}
          />
        </View>
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
        <View style={styles.flatListContainer}>
          <Text style={styles.labelText}>Our Favorites</Text>
          <FlatList
            data={favoriteProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            horizontal={true}
            nestedScrollEnabled={true}
          />
        </View>
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
  typeImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  labelText: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 36,
    marginTop: 20,
    marginLeft: 20,
    color: 'white',
    textAlign: 'center',
  },
  flatListContainer: {
    height: 350,
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
});

export default Home;

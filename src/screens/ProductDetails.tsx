import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {COLORS, PRODUCT_LIST} from '../constants';
import Collection from '../components/Collection';
import Divider from '../components/Divider';

interface Props {
  route: any;
  navigation: any;
}

const ProductDetails = (props: Props) => {
  console.log(props);
  const {
    route: {
      params: {item},
    },
    navigation,
  } = props;

  const favoriteProducts = PRODUCT_LIST.filter(item => item.isFavorite);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        showGoBack={true}
        title={'Product Details'}
      />
      <ScrollView style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.contentView}>
          <View style={styles.headlineView}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.normalText}>
                SKU: {item.id.toString().padStart(4, '0')}
              </Text>
            </View>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
          <Text style={styles.descriptionText}>
            Travel smart with our durable and stylish travel bag, designed for
            both functionality and comfort. Featuring spacious compartments,
            multiple pockets, and a lightweight, water-resistant build, it’s
            perfect for keeping your essentials organized on the go. Whether for
            a weekend getaway or a long journey, this bag is your ideal travel
            companion!
          </Text>
          <View style={styles.collectionView}>
            <Divider />
            <Collection
              label={'You can also like this'}
              products={favoriteProducts}
              navigation={navigation}
              showViewAll={false}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    alignSelf: 'center',
    width: '70%',
    height: 300,
  },
  contentView: {
    padding: 16,
  },
  headlineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 24,
  },
  normalText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
  },
  priceText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 24,
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'justify',
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    width: '80%',
    bottom: 10,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  addText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  collectionView: {
    paddingVertical: 40,
  },
});

export default ProductDetails;

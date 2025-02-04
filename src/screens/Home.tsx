import React from 'react';
import {View, StyleSheet, FlatList, Pressable} from 'react-native';
import ProductItem from '../components/ProductItem';
import Divider from '../components/Divider';
import {PRODUCT_LIST} from '../data/constants';
import Header from '../components/Header';

const Home = ({navigation}: any) => {
  console.log('test');
  return (
    <View style={styles.container}>
      <Header showMenu={true} showGoBack={false} />
      <FlatList
        data={PRODUCT_LIST}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Divider}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('ProductDetails', {product: item});
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

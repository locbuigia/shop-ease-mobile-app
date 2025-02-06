import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

interface Props {
  image: ImageSourcePropType;
  label: string;
  navigation: any;
}

const ProductType = ({image, label, navigation}: Props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ShopScreen')}>
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
    color: '#EF3651',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ProductType;

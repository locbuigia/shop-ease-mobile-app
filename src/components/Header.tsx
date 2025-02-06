import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string | null;
  showGoBack: boolean;
  navigation?: any;
}

const Header = ({title = 'ShopEase', showGoBack = true, navigation}: Props) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {showGoBack && (
        <TouchableOpacity
          style={styles.headerBackIcon}
          onPress={handleBackButton}>
          <Ionicons name="chevron-back-outline" color="white" size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Search the shop"
        onChangeText={setSearchText}
        value={searchText}
      /> */}
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
  input: {
    textAlign: 'center',
    height: 40,
    width: '80%',
    margin: 12,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
});

export default Header;

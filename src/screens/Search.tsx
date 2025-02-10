import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

const Search = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Header showGoBack={false} title={'Search'} navigation={navigation} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>This is Search screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default Search;
